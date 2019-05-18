var Performer = require('../models/ticketModel');
var Flight = require('../models/flightModel');

module.exports = {
    new: newTicket,
    create,
    addToTickets
};

function addToTickets(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
        flight.cast.push(req.body.ticketId);
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

function create(req, res) {
    // Need to "fix" date formatting to prevent day off by 1
    // This is due to the <input type="date"> returning the date
    // string in this format:  "YYYY-MM-DD"
    var s = req.body.born;
    req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    Performer.create(req.body, function (err, ticket) {
        res.redirect('/tickets/new');
    });
}

function newTicket(req, res) {
    Performer.find({}, function (err, tickets) {
        res.render('tickets/new', {
            title: 'Ticket',
            performers
        });
    })
}