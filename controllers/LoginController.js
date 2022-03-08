var express = require('express');
var router = express.Router();


router.get("/", getLogin);

function getLogin(req, res) {
    res.sendFile(__dirname + "/public/login.html");
}


/// --- EXports
module.exports = router;