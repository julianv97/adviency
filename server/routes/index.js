var express = require('express');
var router = express.Router();
const giftsRouter = require('./gifts');

router.use('/gifts', giftsRouter);

module.exports = router;
