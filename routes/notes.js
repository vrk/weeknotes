var express = require('express');
var bodyParser = require('body-parser')
var co = require('co');

var { validateToken } = require('../lib/auth');
var { getDatabase } = require('../lib/db');
var { Notes } = require('../models/notes');
var { Users } = require('../models/users');

var router = express.Router();

var jsonParser = bodyParser.json()

// Log in user and retrieve notes.
router.post('/login', jsonParser, (req, res) => {
  const id_token = req.body.id_token;

  if (!id_token) {
    res.json({
      success: false,
      error: 'Missing required parameter',
    });
    return;
  }

  co(function* () {
    var user_info = yield validateToken(id_token);
    var db = yield getDatabase();
    let users = new Users(db);
    let notes_model = new Notes(db);
    var user_record = yield users.getUser(user_info);
    let notes = yield notes_model.getNotesByIds(user_record.value.notes);
    db.close();
    return {
      success: true,
      user_info: user_record.value,
      notes: notes
    };
  }).then((value) => {
    res.json([value]);
  },
  (err) => {
    res.json([{
      success: false,
      error: err.stack
    }]);
  });
});

// Save note to the server.
router.get('/notes', (req, res) => {
  const id_token = req.query.u;
  const contents = req.query.c || '';
  const week_id = req.query.d;

  if (!id_token || !week_id) {
    res.json({
      success: false,
      error: 'Missing required parameter',
    });
    return;
  }

  co(function* () {
    var user_info = yield validateToken(id_token);
    var db = yield getDatabase();
    let users = new Users(db);
    var user_record = yield users.getUser(user_info);

    let notes = new Notes(db);
    var user_id = user_record.value._id;
    yield notes.saveNote(user_id, week_id, contents);

    db.close();
    return {
      success: true
    };
  }).then((value) => {
    res.json([value]);
  },
  (err) => {
    console.error(err.stack);
    res.json([{
      success: false,
      error: err.stack
    }]);
  });
});

module.exports = router;
