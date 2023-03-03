const path = require('path');
const express = require('express');

const api = express();

api.use(express.static(path.join(__dirname, 'public')));

module.exports = api;
