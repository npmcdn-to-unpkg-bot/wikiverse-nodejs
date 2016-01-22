
var Board = require('../models/board');

// Create endpoint /api/boards for POSTS
exports.postBoards = function(req, res){

  // Create a new instance of the Board model
  var board = new Board();

  board.title = req.body.title
  board.author = req.body.author
  board.featured_image = req.body.featured_image
  board.search_history = req.body.search_history
  board.bricks = req.body.bricks

  // Save the beer and check for errors
  board.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Board added to wikiverse!', data: board });
  });
};

// Create endpoint /api/boards for GET
exports.getBoards = function(req, res) {
  console.log("cdsacsa")
  // Use the Board model to find all beer
  Board.find(function(err, boards) {
    if (err)
      res.send(err);

    res.json(boards);
  });
};


// Create endpoint /api/boards/:board_id for GET
exports.getBoard = function(req, res) {
  // Use the Board model to find a specific board
  Board.findById(req.params.board_id, function(err, board) {
    if (err)
      res.send(err);

    res.json(board);
  });
};

// Create endpoint /api/boards/:board_id for PUT
exports.putBoard = function(req, res) {
  // Use the Beer model to find a specific beer
  Board.findById(req.params.board_id, function(err, board) {
    if (err)
      res.send(err);

    // Update the existing board quantity
    board.author = req.body.author;
    board.title = req.body.title;
    board.search_history = req.body.search_history;
    board.bricks = req.body.bricks;

    // Save the board and check for errors
    board.save(function(err) {
      if (err)
        res.send(err);

      res.json(board);
    });
  });
};

// Create endpoint /api/boards/:board_id for DELETE
exports.deleteBoard = function(req, res) {
  // Use the Board model to find a specific board and remove it
  Board.findByIdAndRemove(req.params.board_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Board removed from wikiverse!' });
  });
};