var express = require('express');
var co = require('co');

var { validateToken } = require('../lib/auth');
var { getDatabase } = require('../lib/db');
var { Notes } = require('../models/notes');
var { Users } = require('../models/users');

var router = express.Router();

router.get('/notes', (req, res) => {
  co(function* () {
    var user_info = yield validateToken('fake_token');
    var db = yield getDatabase();
    let users = new Users(db);
    var user_record = yield users.getUser(user_info);
    db.close();
    let notes = [];
    return {
      user_info: user_record.value,
      notes: 'NOTS' 
    };
  }).then((value) => {
    res.json([value]);
  },
  (err) => {
    console.error(err.stack);
    res.json([{
      error: err.stack
    }]);
  });
});

router.post('/notes', (req, res) => {

  validateToken('fake_token', (user_info) => {
    console.log(user_info);
    let map = [];
    map[0] = {};
    res.json(map);
  });
});

module.exports = router;
