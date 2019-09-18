const express = require('express');  
const logger = require('morgan');  
const mongoose = require('mongoose');  
const path = require('path');
const ejs = require('ejs');
const sass = require('node-sass');
const fs = require('fs');

const MONGOURL = "";
const PORT = process.env.PORT || 3000;

const app = express();


//setup Routes
//const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

//setup Models
const User = require('./models/User');
const Product = require('./models/Product');

//Use Routes
app.use(function(req, res, next){
    next();
})
//app.use(adminRouter);
app.use(userRouter)

//setup EJS view engine
app.set('view', path.join(__dirname, 'views'));
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

//Remove comments from mongodb
//connection of you have mongodb URL

//connect to MONGODB
// mongoose.connect(MONGOURL)
//     .then(() => {
//         console.log("Database Connected");
//     })
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log('App connected and Listening');
//         })
//     })
//     .catch((err) => {
//         console.log(err);
//     })

//delete code section 
//if you have mongodb
//url
app.listen(PORT, (data) => {
    console.log('App is connected and listening at '+PORT)
})
    

module.exports = app;



