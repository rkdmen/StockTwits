'use strict';

let express = require('express');
let router = express.Router();
let request = require('request');
var fs = require('fs');

router.post('/dataJSON', (req, res) => {

  // let symbol = req.body.symbol;
  // let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  // fs.writeFile('./data/stock-data.json', 'helllo', function(err){
  //   if(err) return console.log(err);
  //   console.log('Wrote to JSON')
  // })
  // request(db, (err, response, body))

});


router.get('/dataJSON', (req, res) => {
  // console.log(req.query, 'is my req.body /stock')
  // let symb = req.query.symbol;
  // console.log(symb, ' is my symbol')
  // const url = `https://api.stocktwits.com/api/2/streams/symbol/${symb}.json`;
  // console.log(url, 'is my url')
  // request(url, (err, response, body) => {
  //   if (err) throw new Error(err);
  //   console.log(body, 'request body');
  //   res.send(body);
  // })

});

module.exports = router;
