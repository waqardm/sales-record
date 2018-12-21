const express = require('express');
const path = require('path');
const mysql = require('mysql');

//////////////////// Connect DB ////////////////////

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sales_record'
});

db.connect(err => {
  if (err) {
    throw err;
  }
  console.log("mysql connected");
});

// db.end();

////////////////////////////////////////

//initialise app
const app = express();

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    res.render('index', {
        title : 'Sales Record',
        days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],

        employees: [
            'emp1',
            'emp2',
            'emp3',
            'emp4',
            'emp5'
        ],

        expenses: [
            'expense 1',
            'expense 2',
            'expense 3',
            'expense 4',
            'expense 5',
        ],

        weekly_totals: [
            'Weekly Total',
            'Gross Profit',
            'Wages Total',
            'Expenses Total',
            'Net Profit'
        ]
    });
});

app.get('/manage', function(req, res) {
    let sqlExpense = 'SELECT * FROM expenseType';
    let sqlEmployee = "SELECT * FROM employees";

    let query = db.query(sqlExpense, (err, result) => {
        if(err) throw err;
        let query2 = db.query(sqlEmployee, (err, result2) => {
            if (err) throw err;
            res.render('manage', {
                title: 'Manage',
                expense: result,
                employee: result2
            });
        });
    });
});


// app.get('/password/update/:id', function (req, res) {
//     let id = req.params.id;
//     let sql = `SELECT * FROM passwords WHERE id = '${id}'`;

//     let query = db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//         res.render('update-password', {
//             title: 'Update Password',
//             site: result[0].site,
//             username: result[0].username,
//             password: result[0].password,
//             id: id
//         });
//     });




app.listen(3000, function(req, res){
    console.log('Server started on port 3000');
    
})
