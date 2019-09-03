const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const MONGOURL = "";
const PORT = 3000;

const app = express();

//setup Routes
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

//setup Models
const User = require('./models/User');
const Product = require('./models/Product');

//setup EJS view engine
app.use('view', path.join(__dirname, 'views'));
app.set('view engine', ejs);

app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));

//Catch all errors
app.use(function(err, req, res, next) {
    //render error page
    res.status(err.status || 500);
    res.render('error', {
        error: err
    })
})

//connect to MONGODB
mongoose.connect(MONGOURL)
    .then(() => {
        console.log("Database Connected");
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log('App connected and Listening');
        })
    })
    .catch((err) => {
        console.log(err);
    })

module.exports = app;



