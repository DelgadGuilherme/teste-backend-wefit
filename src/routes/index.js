const express = require('express');
const profile = require('./profileRoute');
const user = require('./userRoute');
const auth = require('./authRoute');
const state = require('./stateRoute');
const city = require('./cityRoute');
const street = require('./streetRoute');


module.exports = app => {
    app.use(
        express.json(),
        profile,
        user,
        auth,
        state,
        city,
        street
    );
};