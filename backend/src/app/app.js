const express = require('express');
const app = express();

app.use(express.json()); // Middleware para parsear JSON

module.exports = app;