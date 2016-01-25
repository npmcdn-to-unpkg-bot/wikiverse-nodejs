var express = require('express');
var router = express.Router();

var boardRenderController = require('../controllers/boardRender');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Create endpoint handlers for /boards
// router.route('/boards')
//   .post(boardController.postBoards)
//   .get(boardController.getBoards);

// Create endpoint handlers for /boards/:board_id
router.route('/boards/:board_id')
  .get(boardRenderController.getBoardRender);

module.exports = router;
