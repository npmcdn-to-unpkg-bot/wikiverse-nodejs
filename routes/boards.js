var express = require('express');
var router = express.Router();

var boardController = require('../controllers/boardsCRUD');

// Create endpoint handlers for /boards
router.route('/boards')
  .post(boardController.postBoards)
  .get(boardController.getBoards);

// Create endpoint handlers for /boards/:board_id
router.route('/boards/:board_id')
  .get(boardController.getBoard)
  .put(boardController.putBoard)
  .delete(boardController.deleteBoard);

module.exports = router;
