const express = require('express');
const route = require('./route');
const path = require('path');
const PORT = process.env.PORT || 3000;

const server = express();


//Dynamic Files
server.set('view engine', 'ejs');

server.set('views', path.join(__dirname, 'views'));

server.use(route);

//Static Files
server.use(express.static('public'));


server.listen(PORT, () => {
    console.log('Servidor rodando na porta', PORT)
});