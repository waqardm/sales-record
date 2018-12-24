const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

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
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res){
    let date = new Date();
    let employees = 'SELECT * FROM employees';
    let query = db.query(employees, (err, employees) => {
        res.render('index', {
        title: 'Sales Record',
        date: date,
        days: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ],
        employees: employees,
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
});

    
        


//         app.get('/dashboard', function (req, res) {
//             let sql = 'SELECT * FROM passwords';
//             let query = db.query(sql, (err, result) => {
//                 res.render('dashboard', {
//                     title: 'Password Manager',
//                     result: result,
//                     success: true,
//                 });
//             });
//         });

        

       
//     });
// });

app.get('/manage', function(req, res) {
    let sqlExpense = 'SELECT * FROM expenseType';
    let sqlEmployee = 'SELECT * FROM employees';

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

//Add daily figures
app.get('/add/daily', function(req, res){
    res.render('add/daily', {
        title: 'Add Daily Figures'
    });
});

//Add daily to database
app.post('/add/daily', function(req, res) {
    let sql = 'INSERT INTO incomeDetail SET ?';
    let daily = {
        date: req.body.date,
        cash: req.body.cash,
        card: req.body.card,
        cheque: req.body.cheque
    }

    let query = db.query(sql, daily, (err, result) => {
        if(err) throw err;
        res.redirect('/');
    });
});


// Add Employee Page
app.get('/add/employee', function(req, res) {
    res.render('add/employee', {
        title: 'Add Employee'
    });
});

//Add Employee to DB
app.post('/add/employee', function(req, res) {
    let sql = 'INSERT INTO employees SET ?';
    let employee = {
        name: req.body.name,
        amount: req.body.amount
    }
    let query = db.query(sql, employee, (err, result) => {
        if(err)throw err;
        res.redirect('../manage')
    });
});

//Add Expense Type Page
app.get('/add/expense-type', function(req, res){
    res.render('add/expense-type', {
        title: 'Add Expense Type'
    });
});

//Add Expense Type to DB
app.post('/add/expense-type', function(req, res){
    let sql = 'INSERT INTO expenseType SET ?';
    let expense = {
        name: req.body.expense
    }

    let query = db.query(sql, expense, (err, result) => {
        if(err) throw err;
        res.redirect('../manage');
    });
});


// app.post('/password/add', function (req, res) {

//     let sql = "INSERT INTO passwords SET ?";
//     let password = {
//         site: req.body.site,
//         username: req.body.username,
//         password: req.body.password
//     }
//     let query = db.query(sql, password, (err, result) => {
//         if (err) throw err;
//         res.redirect('../dashboard');
//     });
// });


app.listen(3000, function(req, res){
    console.log('Server started on port 3000');
    
})
