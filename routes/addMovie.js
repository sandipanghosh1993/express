var Movie = require('../models/movie.model');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var movie = require('node-movie');

router.post('/', function(req, res) {
    var movies=new Movie(JSON.parse(req.body));
    movies.save(function(err) {
      if(err)
        console.log("Data not added");
      console.log("Data added succesfully");
    });
});
