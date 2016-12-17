'use strict';

let express = require('express');
let router = express.Router();
let request = require('request')
// router.post('/stock', (req, res) => {

// });


router.get('/stock', (req, res) => {
  let symb = req.query.symbol;
  console.log(symb, ' REQUESTING SYMBOL')
  const url = `https://api.stocktwits.com/api/2/streams/symbol/${symb}.json`;
  request(url, (err, response, body) => {
    if (err) throw new Error(err);
    // console.log(body, 'request body');
    res.send(body);
  })

});

module.exports = router;
