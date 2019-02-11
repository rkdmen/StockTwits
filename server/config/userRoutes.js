"use strict";
let express = require("express");
let router = express.Router();
let request = require("request");

router.get("/user", (req, res) => {
  //Retrieve specific user's previous twits

  let user = req.query.user;
  const url = `https://api.stocktwits.com/api/2/streams/user/${user}.json`;
  request(url, (err, response, body) => {
    if (err) throw new Error(err);
    res.send(body);
  });
});

module.exports = router;
