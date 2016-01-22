// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var boardSchema  = new mongoose.Schema({
  title: String,
  author: String,
  featured_image: String,
  search_history: String,
  bricks: String
});

// Export the Mongoose model
module.exports = mongoose.model('board', boardSchema);