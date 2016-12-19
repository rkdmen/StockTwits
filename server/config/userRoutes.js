'use strict';

let express = require('express');
let router = express.Router();
let request = require('request')

router.get('/user', (req, res) => {
  let user = req.query.user;
  console.log(user, ' getting user')
  const url = `https://api.stocktwits.com/api/2/streams/user/${user}.json`;
  request(url, (err, response, body) => {
    if (err) throw new Error(err);
    res.send(body);
  })

});

module.exports = router;
