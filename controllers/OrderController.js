var express = require('express');
var router = express.Router();


router.get("/", getOrder);

function getOrder(req, res) {
    res.sendFile(__dirname + "/public/order.html");
}


/// --- EXports
module.exports = router;