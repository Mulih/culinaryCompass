const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const expressSession = require('express-session');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressLayouts);

app.set('layout', 'layouts/main');
app.set('view engine', 'ejs');

app.use(expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true

}))

const routes = require('./server/routes/recipeRoutes.js');
const userRoutes = require('./server/routes/userRoutes.js');
app.use('/', userRoutes);
app.use('/', routes);

app.listen(port, ()=> console.log(`Listening to port ${port}`));