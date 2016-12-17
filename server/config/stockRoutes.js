'use strict';

let express = require('express');
let router = express.Router();
let request = require('request')
// router.post('/eventForm', (req, res) => {

// });


router.get('/stock', (req, res) => {
  console.log(req.query, 'is my req.body /stock')
  let symb = req.query.symbol;
  console.log(symb, ' is my symbol')
  const url = `https://api.stocktwits.com/api/2/streams/symbol/${symb}.json`;
  console.log(url, 'is my url')
  request(url, (err, response, body) => {
    if (err) throw new Error(err);
    // console.log(body, 'request body');
    res.send(body);
  })

});

module.exports = router;
