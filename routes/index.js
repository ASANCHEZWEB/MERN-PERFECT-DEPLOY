const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/users', (req, res, next) => {
  res.json({users:"respuesta correcta del backend "});
});

module.exports = router;
