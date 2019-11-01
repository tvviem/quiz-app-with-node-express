var express = require('express');
var controllerStudent = require('../controllers/student.controller');

var router = express.Router();

router.get('/', controllerStudent.index);
router.get('/create', controllerStudent.create);

module.exports = router;