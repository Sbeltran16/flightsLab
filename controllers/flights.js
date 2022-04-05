const Flight = require('../models/flight');
const Tickets = require('../models/ticket');

module.exports = {
    new: newFlight,
    index,
    create,
    show
}

function newFlight(req, res){
    res.render('flights/new', {title: 'Add a Flight'});
}

function index(req, res) {
    Flight.find({}, function(err, flights){
        res.render('flights/index',{
            flights,
            title: 'All Flights'
        });
    });
}

function create(req, res){

    const flight = new Flight(req.body);
    flight.save(function(err){
        if (err) return res.render('flights/new',{title: "Add a Flight"});
        res.redirect(`/flights`);
    })
}

function show(req, res){
    Flight.findById(req.params.id, function(err, flights){
        Tickets.find(flights._id, function(err,tickets){
            res.render('flights/show', {
                flights,
                tickets,
                title: 'details'
            })
        })
        
    })
}






