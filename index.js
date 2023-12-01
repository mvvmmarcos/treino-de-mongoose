const express = require('express');
const exhbs = require('express-handlebars');
const app = express();
const conn = require('./db/conn');
const productsRoutes = require('./routes/productsRoutes')

app.engine('handlebars', exhbs.engine());
app.set('view engine','handlebars');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
//rotas
app.use('/products', productsRoutes);
app.listen(3000)
