const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Delta','Southwest','United']
        
    },
    airport: {
        type: String,
        enum: ['ATL','DFW','DEN','LAX','SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            return new Date().getFullYear();
          },
    },
    
  
})

const destinationSchema = new Schema({
    airport: {
        type: String,
        emnum: ['AUS','DFW','DEN','LAX','SAN']
    },
    arrival: Date,

    destinations: {
        type: String
    }
    
})

module.exports = mongoose.model('Flight', flightSchema);