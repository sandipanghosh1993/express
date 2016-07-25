var Movie = require('../models/movie.model');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var movie = require('node-movie');

router.get('/', function(req, res) {
  Movie.find(function(err, movies) {
    if(err){
      return res.send("No movie to show");
    }
    res.json(movies);
  });
});

router.post('/', function(req, res) {
  //var moviename = req.body.name;
  //movie(moviename, function (err, data) {
    //var mov = new Movie(data);
    var movies=new Movie(req.body);
    movies.save(function(err) {
      if(err) {
        //res.send("Data not added");
        console.log("Data not added");
      }
      //res.send("data added succesfully");
      console.log("Data added succesfully");
    });
  //});
});

router.delete('/', function(req, res) {
  Movie.remove({
    Title: req.body.Title
  }, function(err, movie) {
    if(err) {
      //res.send("Movie does not exist");
      console.log("Movie does not exist");
    }
    //res.json(movie);
    console.log(movie);
  });
});
//update
router.put('/:id', function(req, res) {
  Movie.findOne({ _id: req.params.id}, function(err, movie) {
    if(err) {
      return res.send("Movie id not exist, not able to update");
    }
      for(i in req.body) {
      movie[i] = req.body[i];
    }
    //save
    movie.save(function(err) {
      if(err) {
        return res.send("not able to save");
      }

      res.send(movie);
    });
  });
});
module.exports = router;
