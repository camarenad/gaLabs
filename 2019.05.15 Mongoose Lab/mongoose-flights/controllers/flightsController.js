var Flight = require('../models/flightModel');

module.exports = {
    new: newFlight,
    create,
    flights,
    show,
    edit,
    update
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) {
            console.log('ERROR');
            return res.render('flights/new', { error: '' });
        }
        res.redirect('/flights');
        console.log('no error?');
    });
}

// function flights(req, res) {
//     var flights = Flight.find({}).sort( `${req.query.sortDir === '1' ? '' : '-'}${req.query.sortBy}` ).exec(function(err, flights) {
//         res.render('flights/index', {flights});
//     });
// }

function flights(req, res) {
    var sort = {};
    var sortBy = req.query.sortBy;
    var sortDir = req.query.sortDir;
    sort[sortBy] = 1 * sortDir;
    var flights = Flight.find({}).sort(sort).exec(function (err, flights) {
        res.render('flights/index', { flights });
    });
}

function show(req, res) {
    var flights = Flight.findOne({ _id: req.params.id }, function (err, flight) {
        console.log(flight)
        // console.log(_id)
        res.render('flights/show', { flight });
    });
}

function edit(req, res) {
    res.render('flights/:id/edit')
}

function update(req, res) {
    Flight.update(req.params.id, req.body);
    res.redirect('flights');
}
