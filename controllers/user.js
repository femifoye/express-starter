const express = require('express')

exports.getIndex = (req, res, next) => {
    res.send('At Index')
}
