const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    create
}


function create(req, res){
    Ticket.findById(req.params.id, function(err, tickets){
        res.render('tickets/new');
    });
    res.redirect('/flights/:id')

}
