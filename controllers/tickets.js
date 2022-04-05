const req = require('express/lib/request');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flights){
        res.render('tickets/new',{
            flights,
            title: 'Add New Ticket'
        })
    })  
}


function create(req, res){
   Flight.findById(req.params.id, function(err, flights){
       req.body.flight = flights._id;
       Ticket.create(req.body, function(err, ticket){
           res.redirect(`/flights/${flights._id}`);
       })
   })

}

module.exports = {
    new: newTicket,
    create

}