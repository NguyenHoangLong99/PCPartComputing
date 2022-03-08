var express = require('express');
var router = express.Router();


router.get("/", getPayment);

function getPayment(req, res) {
    res.sendFile(__dirname + "/public/payment.html");
}

/// --- EXports
module.exports = router;