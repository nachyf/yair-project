// game.route.js

const express = require('express');
const app = express();
const gameRoutes = express.Router();

// Require Game model in our routes module
let Game = require('../models/Game');

// Defined store route
gameRoutes.route('/add').post(function (req, res) {
  let game = new Game(req.body);
   game.save()
    .then(game => {
    res.status(200).json({'game': 'CoGamein added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
gameRoutes.route('/').get(function (req, res) {
   Game.find(function (err, games){
    if(err){
      console.log(err);
    }
    else {
      res.json(games);
    }
  });
});





module.exports = gameRoutes;