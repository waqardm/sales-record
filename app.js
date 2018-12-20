const express = require('express');
const path = require('path');


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
        ]
    });
});




app.listen(3000, function(req, res){
    console.log('Server started on port 3000');
    
})
