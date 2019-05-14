const express = require('express');
const path = require('path');
const app = express();
const recipesDb = require('./data/recipesDb');

app.set('view engine', 'ejs');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/assets', express.static('assets'));

app.get('/', function(req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/recipes', function(req, res) {
    res.render('recipes/index', {
        recipes: recipesDb.getAll()
    });
});



app.get('/recipes/:id', function(req, res) {
    res.render('recipes/show', {dish: recipesDb.getOne(req.params.id)});
});

app.listen(3001, function() {
    console.log('Listening on port 3001.');
});
