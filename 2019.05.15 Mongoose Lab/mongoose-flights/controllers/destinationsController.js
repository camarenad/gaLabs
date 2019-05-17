var Flight = require('../models/flightModel');

module.exports = {
    create
};

function create(req, res) {
    console.log('in create');
    Flight.findById(req.params.id, function (err, flight) {
        console.log('in flight find');
        flight.destinations.push(req.body);
        flight.save(function (err) {
            console.log('in flight save');
            res.redirect(`/flights/${flight._id}`);
        });
    });
}