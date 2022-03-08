var express = require('express');
var router = express.Router();


router.get("/", getReport);

function getReport(req, res) {
    res.sendFile(__dirname + "/public/report.html");
}


/// --- EXports
module.exports = router;