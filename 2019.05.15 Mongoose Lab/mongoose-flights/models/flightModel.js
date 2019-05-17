var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
});

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    flightNumber: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        // default: 
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    destinations: {
        type: [destinationSchema]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model('flight', flightSchema);

// module.exports = flight;
