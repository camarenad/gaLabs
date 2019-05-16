var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
},
{
    timestamps: true
});

module.exports = mongoose.model('flight', flightSchema);

// module.exports = flight;
