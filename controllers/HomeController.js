var express = require("express");
var router = express.Router();

router.get("/", getHome);

function getHome(req, res) {
  res.sendFile(__dirname + "/public/home.html");
}

module.exports = router;
