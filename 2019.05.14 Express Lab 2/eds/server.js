var express = require('express');
// var skillController = require('./controllers/skillController')
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var methodOverride = require('method-override');

// var indexRouter = require('./routes/index');
var skillRouter = require('./routes/skillRoute');
app.use(methodOverride(''));

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'views')));

app.use('/assets', express.static('assets'));

app.post('/new', urlencodedParser, function(req, res) {
    res.render('skills/new-success', {data: req.body});
});

// app.use('/', indexRouter);
app.use('/', skillRouter);

// app.use(methodOverride('_method'));


// skillController(app);

app.listen(3001, function() {
    console.log('Listening on port 3001.');
});
