var express = require('express');
var router = express.Router();
const giftsController = require('../controllers/gifts');

router.get('/', giftsController.getAll);
router.post('/', giftsController.createGift);
router.delete('/:id', giftsController.deleteGift);
router.delete('/', giftsController.deleteAllGifts);

module.exports = router;
