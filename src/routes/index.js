const express = require('express');
const profile = require('./profileRoute');
const user = require('./userRoute');
const auth = require('./authRoute');

module.exports = app => {
    app.use(
        express.json(),
        profile,
        user,
        auth
    );
};