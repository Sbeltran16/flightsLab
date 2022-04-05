const Flight = require('../models/flight')


function show(req, res){
    Flight.findById(req.params.id, function(err, flight){
            res.render("flights/show", {title: "All flights", flight: flight});
        
    })
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
        res.redirect(`/flights/${flight._id}`);
    })
}








module.exports = {
    new: newFlight,
    index,
    create,
    show
}