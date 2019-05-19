var Ticket = require('../models/ticketModel');
var Flight = require('../models/flightModel');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    var flightId = req.params.flightId;
    console.log(req.params)
    console.log(flightId);
    Flight.findById(flightId, function (err, flight) {
        res.render('tickets/new', { flightId, flight });
    });
}

function create(req, res) {
    var ticket = new Ticket(req.body);
    ticket.save(function (err) {
        err ?
            res.render('tickets/new') :
            Flight.findById(req.params.flightId, function (e, flight) {
                flight.tickets.push(ticket);
                flight.save(function (err) {
                    err ?
                        res.render('tickets/new') : res.redirect(`/flights/${flight._id}`)
                });
            });
    });
}