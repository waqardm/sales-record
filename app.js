const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const { DateTime } = require("luxon");

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

    let date = DateTime.local()
      .setLocale("GB")
      .startOf("week")
      .toFormat("dd-MM-yyyy");
    var day = DateTime.local().startOf("week");

    let tue = day.plus({ days: 1 });
    let wed = day.plus({ days: 2 });
    let thur = day.plus({ days: 3 });
    let fri = day.plus({ days: 4 });
    let sat = day.plus({ days: 5 });

    let employees = 'SELECT * FROM employees';
    let wagesTotal = 'SELECT SUM(amount) AS TotalWages FROM employees';
    let expenses = `SELECT * FROM expenses INNER JOIN expenseType ON expenses.expenseType_id = expenseType.id WHERE date BETWEEN '${ day.toFormat('yyyy-MM-dd') }' AND '${ sat.toFormat('yyyy-MM-dd') }'`;

    let expensesWeeklyTotal = `SELECT SUM(amount) AS expensesWeeklyTotal FROM expenses WHERE date BETWEEN '${ day.toFormat('yyyy-MM-dd') }' AND '${ sat.toFormat('yyyy-MM-dd') }'`;

    //getting cash/charge figures based on system calculations
    let monCashCharge = "SELECT * FROM runningIncome WHERE date = '" + day.toFormat("yyyy-MM-dd") + "'";
    let tueCashCharge = "SELECT * FROM runningIncome WHERE date = '" + tue.toFormat("yyyy-MM-dd") + "'";
    let wedCashCharge = "SELECT * FROM runningIncome WHERE date = '" + wed.toFormat("yyyy-MM-dd") + "'";
    let thurCashCharge = "SELECT * FROM runningIncome WHERE date = '" + thur.toFormat("yyyy-MM-dd") + "'";
    let friCashCharge = 'SELECT * FROM runningIncome WHERE date = \'' + fri.toFormat('yyyy-MM-dd') + '\'';
    let satCashCharge = "SELECT * FROM runningIncome WHERE date = '" + sat.toFormat("yyyy-MM-dd") + "'";

    
    //getting cash in hand, card, cheque figures
    let monCash = 'SELECT * FROM incomeDetail WHERE date = \'' + day.toFormat('yyyy-MM-dd')+ '\'';
    let tueCash = 'SELECT * FROM incomeDetail WHERE date = \'' + tue.toFormat('yyyy-MM-dd') + '\'';
    let wedCash = "SELECT * FROM incomeDetail WHERE date = '" + wed.toFormat("yyyy-MM-dd") + "'";
    let thurCash = "SELECT * FROM incomeDetail WHERE date = '" + thur.toFormat("yyyy-MM-dd") + "'";
    let friCash = "SELECT * FROM incomeDetail WHERE date = '" + fri.toFormat("yyyy-MM-dd") + "'";
    let satCash = "SELECT * FROM incomeDetail WHERE date = '" + sat.toFormat("yyyy-MM-dd") + "'";
    
    

    let query = db.query(employees, (err, employees) => {
        if(err) throw err;
    let query2 = db.query(wagesTotal, (err, wagesTotal) => {
        if (err) throw err;
    let query3 = db.query(expenses, (err, expenses) => {
        if (err) throw err;
    let query4 = db.query(expensesWeeklyTotal, (err, expensesWeeklyTotal) => {
        if (err) throw err;
    let query5 = db.query(monCashCharge, (err, monCashCharge) => {
            if (err) throw err;
    let query5 = db.query(tueCashCharge, (err, tueCashCharge) => {
        if (err) throw err;
    let query5 = db.query(wedCashCharge, (err, wedCashCharge) => {
        if (err) throw err;
    let query5 = db.query(thurCashCharge, (err, thurCashCharge) => {
        if (err) throw err;
    let query5 = db.query(friCashCharge, (err, friCashCharge) => {
        if (err) throw err;
    let query5 = db.query(satCashCharge, (err, satCashCharge) => {
        if (err) throw err;
    let query6 = db.query(monCash, (err, monCash) => {
        if (err) throw err;
    let query7 = db.query(tueCash, (err, tueCash) => {
        if(err) throw err;
    let query8 = db.query(wedCash, (err, wedCash) => {
        if (err) throw err;
    let query9 = db.query(thurCash, (err, thurCash) => {
        if (err) throw err;
    let query10 = db.query(friCash, (err, friCash) => {
        if (err) throw err;
    let query11 = db.query(satCash, (err, satCash) => {
        if (err) throw err;
            res.render("index", {
                title: "Sales Record",
                date: "Week Commencing: " + date,
                days: [
                "Monday " + date,
                "Tuesday " + tue.toFormat("dd-MM-yyyy"),
                "Wednesday " + wed.toFormat("dd-MM-yyyy"),
                "Thursday " + thur.toFormat("dd-MM-yyyy"),
                "Friday " + fri.toFormat("dd-MM-yyyy"),
                "Saturday " + sat.toFormat("dd-MM-yyyy")
                ],
                monTillCash: monCashCharge[0].cash,
                monTillCharge: monCashCharge[0].charge,
                tueTillCash: tueCashCharge[0].cash,
                tueTillCharge: tueCashCharge[0].charge,
                wedTillCash: wedCashCharge[0].cash,
                wedTillCharge: wedCashCharge[0].charge,
                thurTillCash: thurCashCharge[0].cash,
                thurTillCharge: thurCashCharge[0].charge,
                friTillCash: friCashCharge[0].cash,
                friTillCharge: friCashCharge[0].charge,
                satTillCash: satCashCharge[0].cash,
                satTillCharge: satCashCharge[0].charge,
                monCash: monCash[0].cash,
                monCard: monCash[0].card,
                monCheque: monCash[0].cheque,
                tueCash: tueCash[0].cash,
                tueCard: tueCash[0].card,
                tueCheque: tueCash[0].cheque,
                wedCash: wedCash[0].cash,
                wedCard: wedCash[0].card,
                wedCheque: wedCash[0].cheque,
                thurCash: thurCash[0].cash,
                thurCard: thurCash[0].card,
                thurCheque: thurCash[0].cheque,
                friCash: friCash[0].cash,
                friCard: friCash[0].card,
                friCheque: friCash[0].cheque,
                satCash: satCash[0].cash,
                satCard: satCash[0].card,
                satCheque: satCash[0].cheque,
                employees: employees,
                wagesTotal: wagesTotal[0].TotalWages,
                expenses: expenses,
                expensesWeeklyTotal: expensesWeeklyTotal[0].expensesWeeklyTotal
    });
    });
    });                 
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
    });
});


app.get('/manage', function(req, res) {
    let sqlExpense = 'SELECT * FROM expenseType';
    let sqlEmployee = 'SELECT * FROM employees';
    let total = 'SELECT SUM (amount) AS TotalWages FROM employees';

    let query = db.query(sqlExpense, (err, result) => {
        if(err) throw err;
        let query2 = db.query(sqlEmployee, (err, result2) => {
            if (err) throw err;
            let query3 = db.query(total, (err, total) => {
                if (err) throw err;
                res.render('manage', {
                    title: 'Manage',
                    expense: result,
                    employee: result2,
                    total: total[0].TotalWages
                });
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

// Add weekly/daily expense
app.get('/add/expense', function(req,res){
    let expenseType = 'SELECT * FROM expenseType';
    let query = db.query(expenseType, (err, result) => {
        if(err) throw err;
        res.render('add/expense', {
            title: 'Add Expense',
            expense: result,
            expenseType_id: expenseType.id
        });
    });
});

//Add weekly daily expense to DB
app.post('/add/expense', function(req,res){
    let sql = 'INSERT INTO expenses SET ?';
    let expense = {
        date: req.body.date,
        expenseType_id: req.body.expenseType,
        amount: req.body.amount
    }
    let query = db.query(sql, expense, (err, result) => {
        if(err) throw err;
        res.redirect('../manage');
    });
});

// Add daily cash/charge
app.get('/add/cash-charge', function(req, res){
    res.render('add/cash-charge', {
        title: 'Add Cash / Charge'
    });
});

// Add daily cash/charge to db
app.post('/add/cash-charge', function(req,res) {
    let sql = 'INSERT INTO runningIncome SET ?';
    let figures = {
        date: req.body.date,
        cash: req.body.cash,
        charge: req.body.cash
    }

    let query = db.query(sql, figures, (err, result) => {
        if(err) throw err;
        res.redirect('../manage');
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

// update employee view
app.get('/update/employee/:id', function(req, res){
    let id = req.params.id;
    let sql = `SELECT * FROM employees WHERE id = '${ id }'`;

    let query = db.query(sql, (err, employee) => {
        if(err) throw err;
        res.render('update/employee', {
           title: 'Update Employee',
           id: id,
           name: employee[0].name,
           amount: employee[0].amount
        });
    });
});

// update employee in db
app.post('/update/employee/:id', function(req,res){
    let id = req.params.id;
    let sql = `UPDATE employees SET ? WHERE id = '${ id }'`;
    
    let employee = {
        name: req.body.name,
        amount: req.body.amount
    };

    let query = db.query(sql, employee, (err) => {
        if(err) throw err;
        res.redirect('../../manage');
    });
});

//delete employee
app.get('/delete/employee/:id', function (req, res) {
    let id = req.params.id;
    let sql = `DELETE FROM employees where id = '${id}'`;

    let query = db.query(sql, (err) => {
        if (err) throw err;
        res.redirect('/manage');
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
    let query = db.query(sql, expense, (err) => {
        if(err) throw err;
        res.redirect('../manage');
    });
});


//update expense type view
app.get('/update/expense-type/:id', function(req, res){
    let id = req.params.id;
    let sql = `SELECT * FROM expenseType WHERE id = '${ id }'`;

    let query = db.query(sql, (err, expenseType) => {
        if(err) throw err;
        res.render('update/expense-type', {
          title: "Update ExpenseType",
          id: id,
          name: expenseType[0].name,
        });
    });
});


//Update Expense Type save method
app.post('/update/expense-type/:id', function(req, res) {
    let id = req.params.id;
    let expense = {
        name: req.body.expense
    };
    let sql = `UPDATE expenseType SET ? WHERE id = '${ id }'`;
    let query = db.query(sql, expense, (err) => {
        if (err) throw err;
        res.redirect('../../manage');
    });
});

//delete expense type
app.get('/delete/expense-type/:id', function(req, res) {
    let id = req.params.id;
    let sql = `DELETE FROM expenseType where id = '${ id }'`;
    
    let query = db.query(sql, (err) => {
        if(err) throw err;
        res.redirect('/manage');
    });
});

app.listen(3000, function(req, res){
    console.log('Server started on port 3000');
});