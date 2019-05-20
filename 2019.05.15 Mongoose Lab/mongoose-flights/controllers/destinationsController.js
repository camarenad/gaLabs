var Flight = require('../models/flightModel');

module.exports = { create };

function create(req, res) {
    if (req.body.arrival === '') {
        req.body.arrival = undefined 
    };
    Flight.findById(req.params.flightId, function(err, flight) {
        flight.destinations.push(req.body);
        flight.save(function(err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}