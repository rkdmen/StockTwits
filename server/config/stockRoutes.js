'use strict';

let express = require('express');
let router = express.Router();
let request = require('request')

router.get('/stock', (req, res) => {
  let symb = req.query.symbol;
  console.log(symb, ' REQUESTING SYMBOL')
  const url = `https://api.stocktwits.com/api/2/streams/symbol/${symb}.json`;
  request(url, (err, response, body) => {
    if (err) throw new Error(err);
    let parsed = JSON.parse(body);
    if(parsed.response.status === 404){
      return; //If incorrect ticker, it will not do anything
    }
    res.send(body);
  })

});

module.exports = router;
