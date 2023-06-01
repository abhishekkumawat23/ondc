var express = require('express');
var router = express.Router();
const Movie = require('../models/Movie')

/* GET movies listing. */
async function movieRequestHandler(req, res, next) {
  const movies = await Movie.find();
  res.send(movies);
}

async function movieCreateHandler(req, res, next) {
  const {title, image, rating} = req.body;
  const movie = new Movie({title, image, rating});
  const result = await movie.save();
  // TODO: use result.
  res.status(201).json({message: "User saved"});
}

router.get('/', movieRequestHandler);
router.post('/', movieCreateHandler);

module.exports = router;
