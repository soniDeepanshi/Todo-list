// require express
const express = require('express');

// set up the port number
const port = 5000;

// creating express app
const app = express();

// importing the db
const db = require('./config/mongoose');

// importing the Schema
const Todo = require('./models/todo');

// static files
app.use(express.static("./views"));
// middleware
app.use(express.urlencoded());

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// make the app to listen on given port
app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server : ${err}`);
    }
    console.log(`Server is running on http://localhost:${port}`);
});

// rendering the app
app.get('/', function (req, res) {
    Todo.find({}, function (err, todo) {
        if (err) {
            console.log('Error in fetching from db');
            return;
        }

        return res.render('ToDoList', {
            title: "ToDoist",
            todo: todo
        });
    });
});


// creating todos
app.post('/create-todo', function (req, res) {

    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    }, function (err, newtodo) {
        if (err) {
            console.log('error in creating todo', err);
            return;
        }
        console.log(newtodo);
        return res.redirect('back');
    });
});


// deleting todos
app.get('/delete-todo', function (req, res) {
    // getting the id from query
    var id = req.query;

    // checking the number of todos selected to delete
    var count = Object.keys(id).length;
    for (let i = 0; i < count; i++) {
        Todo.findByIdAndDelete(Object.keys(id)[i], function (err) {
            if (err) {
                console.log('error in deleting Todo');
            }
        })
    }
    return res.redirect('back');
});
