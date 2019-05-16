var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost/flights',
    {useNewUrlParser: true}
);

var db = mongoose.connection;

db.once('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
}).on('error', function(error) {
    console.log('Connection error:', error)
});