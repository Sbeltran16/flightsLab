const req = require('express/lib/request');
const Flight = require('../models/flight');
const Ticket = require('../models/ticket');


function newTicket(req, res){
        res.render('tickets/new') 
        
}


function create(req, res){
    Ticket.findById(req.params.id, function(err, tickets){
        res.render('tickets/new');
    });
    res.redirect('/flights/:id')

}

module.exports = {
    new: newTicket,
    create

}