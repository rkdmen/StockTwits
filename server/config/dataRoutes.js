'use strict';

let express = require('express');
let router = express.Router();
let request = require('request');
let fs = require('fs');

router.post('/dataJSON', (req, res) => {
  let title;
  let symb;
  let symbol = req.body.symbol;
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  console.log(JSONData, ' json data');

  // const url = `https://api.stocktwits.com/api/2/streams/symbol/${symbol}.json`;
  // request(url, (err, response, body) => {
  //   if (err) throw new Error(err);
  //   console.log(response, ' RESPONSE BODY!!!!')
  //   console.log(body.symbol, 'request body!!!');
  //   // symb = body.symbol.symbol;
  //   // title = body.symbol.title;
  //   // res.send(body);
  // })


  if(JSONData.length < 5){
      JSONData.push({symbol:symbol, title:title});
    fs.writeFile('./data/stock-data.json', JSON.stringify(JSONData, null, 2), 'utf-8', function (err) {
      if (err) {
        console.error(err);
      } else {
         res.sendStatus(200);
      }
    });
  } else {
    res.sendStatus(200)
  }
});


router.get('/dataJSON', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  res.send(JSONData);
});


router.delete('/dataJSON/:symb', (req, res) => {
  let JSONData = JSON.parse(fs.readFileSync('./data/stock-data.json', 'utf8'));
  let id = req.params.symb;
  console.log(JSONData, ' JSON DATA');
  console.log(id, ' deleting ID');
  JSONData.splice(id, 1);

  fs.writeFile('./data/stock-data.json', JSON.stringify(JSONData, null, 2), 'utf-8', function (err) {
    if (err) {
      console.error(err);
    } else {
       res.sendStatus(200);
    }
  });
})



module.exports = router;



