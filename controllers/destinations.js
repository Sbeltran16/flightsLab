const req = require('express/lib/request');
const Flight = require('../models/flight');


module.exports ={
    create,
}


function create(req, res){
    Flight.findById(req.params.id, function(err, flights){
        if (!Array.isArray(flights.destinations)) {
            flights.destinations = [];
        }
        flights.destinations.push(req.body);
        console.log(flights)
        flights.save(function(err){
            res.redirect(`/flights/${flights._id}`);
        })
    })

}
