
var Board = require('../models/board');

// Create endpoint /api/boards/:board_id for GET
exports.getBoardTemplate = function(req, res) {
  // Use the Board model to find a specific board
  Board.findById(req.params.board_id, function(err, board) {
    if (err)
      res.send(err);

    res.render('single', board);
  });
};

