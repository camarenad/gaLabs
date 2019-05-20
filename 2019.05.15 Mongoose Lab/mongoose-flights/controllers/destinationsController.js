var Flight = require('../models/flightModel');

module.exports = {
    create,
    delete: deleteDestination
};

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

// DELETE BY REMOVE

function deleteDestination(req, res) {
    console.log('here I am')
    Flight.findById(req.params.flightId, function (err, flight) {
        flight.destinations.id(req.params.destinationId).remove();
        flight.save(function (err) {
            res.redirect(`/flights/${flight._id}`);
        });
    });
}

// DELETE BY PULL

// function deleteDestination(req, res) {
//     Flight.findById(req.params.flightId, function(err, flight) {
//         flight.update(
//             { 'flights.destinations._id': (req.params.destinationId) },
//             { $pull: { 'flights.$.destinations': { '_id': (req.params.destinationId) } } }
//         )
        
//         console.log('')
//         res.redirect(`/flights/${flight._id}`);
//     });

// }