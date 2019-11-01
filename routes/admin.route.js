var express = require('express');
var controllerAdmin = require('../controllers/admin.controller');

var router = express.Router();

router.get('/', controllerAdmin.index); // localhost:port/admin/
router.get('/manage-users', controllerAdmin.manageUsers); // host-path-port/admin/manage-users

module.exports = router;