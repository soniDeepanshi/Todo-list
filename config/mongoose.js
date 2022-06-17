// require library
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb://localhost/todos');

// aquire the connection
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// up and running
db.once('open', function(){
    console.log('Connected to Database.');
});

// exporting the database
module.exports = db;