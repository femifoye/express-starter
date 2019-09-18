const express = require('express')

exports.getIndex = (req, res, next) => {
    res.render('pages/landing', {
        pageTitle: "Your Page Title"
    });
}
