var express = require('express');
var { validateToken } = require('../lib/auth');

var router = express.Router();

router.get('/notes', (req, res) => {
  validateToken('fake_token', (user_info) => {
    console.log(user_info);
    let map = [];
    map[0] = user_info;
    res.json(map);
  });
});
module.exports = router;
