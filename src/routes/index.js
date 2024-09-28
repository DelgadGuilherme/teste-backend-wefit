const express = require('express');
const profile = require('./profileRoute');
const user = require('./userRoute');

module.exports = app => {
    app.use(
        express.json(),
        profile,
        user,
    );
};