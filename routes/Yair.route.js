// game.route.js

const express = require('express');
const app = express();
const YairRoutes = express.Router();

// Require Game model in our routes module
let Yair = require('../models/Yair');

// Defined store route
YairRoutes.route('/add').post(function (req, res) {
  let game = new Yair(req.body);
   game.save()
    .then(game => {
    res.status(200).json({'game': 'CoGamein added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
YairRoutes.route('/').get(function (req, res) {
  Yair.find(function (err, Yair){
    if(err){
      console.log(err);
    }
    else {
      res.json(Yair);
    }
  });
});





module.exports = YairRoutes;
