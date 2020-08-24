const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  res.send('{"message": "Hello my name is Carlos"}');
});

module.exports = router;
