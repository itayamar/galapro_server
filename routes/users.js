var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users_ctrl');


/* GET users listing. */
router.get('/', function(req, res, next) {
  usersCtrl.getUsers(req, res, next);
});

router.post('/', function(req, res, next) {
  usersCtrl.addUser(req, res, next);
});

module.exports = router;
