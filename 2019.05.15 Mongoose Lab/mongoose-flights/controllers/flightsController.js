var Flight = require('../models/flightModel');
var Ticket = require('../models/ticketModel');

function flights(req, res) {
    var sort = {};
    var sortBy = req.query.sortBy;
    var sortDir = req.query.sortDir;
    sort[sortBy] = 1 * sortDir;
    Flight.find({}).sort(sort).exec(function (err, flights) {
        res.render('flights/index', { flights });
    });
}

module.exports = {
    new: newFlight,
    create,
    flights,
    show,
    delete: deleteTicket,
    // deleteDestination
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    if (req.body.departs === '') {
        req.body.departs = undefined
    }
    var flight = new Flight(req.body);
    flight.save(function (err) {
        if (err) return res.render('flights/new', { error: '' });
        res.redirect('/flights');
    });
}

function show(req, res) {
    var sort = {};
    var sortBy = req.query.sortBy;
    var sortDir = req.query.sortDir;
    sort[sortBy] = 1 * sortDir;

    Flight.findById(req.params.flightId).populate('tickets').exec(function (err, flight) {
        Ticket.find({ _id: { $nin: flight.tickets } }).exec(function (err, tickets) {
            var destinations = flight.destinations;
            // console.log({ 'flight.destinations._id': ObjectId('5ce221703f4a04becca1a2b0') })
            console.log('FLIGHT BELOW')
            console.log(flight)
            console.log('FLIGHT ABOVE')
            console.log('FLIGHT DESTINATIONS BELOW')
            console.log(flight.destinations)
            console.log('FLIGHT DESTINATIONS ABOVE')

        Flight.update(
            { 'flight.destinations._id': ('5ce24e4afa40a4c6f36dc214') },
            { $pull: { 'flights.$.destinations': { '_id': ('5ce24e4afa40a4c6f36dc214') } } }
        )

            if (sortBy == 'airport' && sortDir == '1') {
                destinations.sort(function (a, b) {
                    if (a.airport < b.airport) {
                        return -1;
                    }
                    if (a.airport > b.airport) {
                        return 1;
                    }

                    return 0;
                });
            } else if (sortBy == 'airport' && sortDir == '-1') {
                destinations.sort(function (a, b) {
                    if (b.airport < a.airport) {
                        return -1;
                    }
                    if (b.airport > a.airport) {
                        return 1;
                    }

                    return 0;
                });
            } else if (sortBy == 'arrival' && sortDir == '-1') {
                destinations.sort(function (a, b) {
                    return b.arrival - a.arrival;
                });

            } else {
                destinations.sort(function (a, b) {
                    return a.arrival - b.arrival;
                });
            }

            // destinations.


            res.render('flights/show', {
                title: 'Flight Detail',
                flight,
                tickets,
                destinations
            });
        });
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

function deleteTicket(req, res) {
    Ticket.findByIdAndDelete(req.params.ticketId, function (err) {
        res.redirect(`/flights/${req.params.flightId}`);
    });
}

// function deleteDestination(req, res) {
//     Flight.findById(req.params.flightId).exec(function (err, flight) {

    
//     Flight.update(
//         { 'flight.destinations._id': ObjectId('5ce221703f4a04becca1a2b0') },
//         { $pull: { 'flights.$.destinations': { '_id': ObjectId('5ce221703f4a04becca1a2b0') } } }
//     );
//     res.redirect(`/flights/${req.params.flightId}`);
// }