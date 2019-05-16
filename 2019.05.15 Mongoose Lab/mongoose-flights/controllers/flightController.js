var Flight = require('../models/flightModel');

module.exports = {
    new: newFlight,
    create,
    flights,
    about,
}

function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    var flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log('ERROR');
            return res.render('flights/new', {error: ''});
        }
        res.redirect('/flights');
        console.log('no error?');
    });
}

// function flights(req, res) {
//     console.log(req.query.sortBy);
//     var flights = Flight.find().sort( { airline : -1 } );
//     console.log(flights)
//     function(err, flights) {
        
//         res.render('flights/index', {
//             flights
//         });
//     });
// }

function flights(req, res) {
    console.log(req.query.sortBy);
    Flight.find({}, function(err, flights) {
        
        res.render('flights/index', {
            flights
        });
    });
}

function about(req, res) {
    res.render('about');
}