var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/flights')


router.post('/flights/:id/tickets/new', ticketsCtrl.create);


module.exports = router;