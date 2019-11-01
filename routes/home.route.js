var express = require('express');
var controllerHome = require('../controllers/home.controller');

var router = express.Router();

router.get('/', controllerHome.index);
// router.get('/create', controllerUser.create);

module.exports = router;