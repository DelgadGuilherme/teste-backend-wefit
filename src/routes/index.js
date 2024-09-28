const express = require('express');
const profile = require('./profileRoute');

module.exports = app => {
    app.use(
        express.json(),
        profile,
    );
};