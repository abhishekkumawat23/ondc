const mongoose = require("mongoose")

const columns = {
  title: String,
  image: String,
  rating: Number
}

const schema = new mongoose.Schema(columns);
const movieModel = mongoose.model("Movie", schema);

module.exports = movieModel;
