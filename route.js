const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    res.render('pages/index');
});

route.get('/servicos', (req, res) => {
    res.render('pages/services');
});

route.get('/produtos', (req, res) => {
    res.render('pages/produtos');
});

route.get('/contatos', (req, res) => {
    res.render('pages/contatos');
});


module.exports = route;