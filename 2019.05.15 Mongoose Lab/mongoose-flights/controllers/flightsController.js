var Flight = require('../models/flightModel');
var Ticket = require('../models/ticketModel');

module.exports = {
    new: newFlight,
    create,
    flights,
    show,
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
    Flight.findById(req.params.id).populate('tickets').exec(function (err, flight) {
        Ticket.find({ _id: { $nin: flight.tickets } }).exec(function (err, tickets) {
            console.log('tickets');
            res.render('flights/show', {
                title: 'Flight Detail', flight, tickets
            });
        });
    });
}

function update(req, res) {
    Flight.update(req.params.id, req.body);
    res.redirect('flights');
}