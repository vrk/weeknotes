var express = require('express');
var co = require('co');

var { validateToken } = require('../lib/auth');
var { getDatabase } = require('../lib/db');
var { Notes } = require('../models/notes');
var { Users } = require('../models/users');

var router = express.Router();

// Log in user and retrieve notes.
router.get('/login', (req, res) => {
  co(function* () {
    var user_info = yield validateToken('fake_token');
    var db = yield getDatabase();
    let users = new Users(db);
    let notes_model = new Notes(db);
    var user_record = yield users.getUser(user_info);
    let notes = yield notes_model.getNotesByIds(user_record.value.notes);
    db.close();
    return {
      user_info: user_record.value,
      notes: notes
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

// Save note to the server.
router.get('/notes', (req, res) => {
  co(function* () {
    var user_info = yield validateToken('fake_token');
    var db = yield getDatabase();
    let users = new Users(db);
    console.log('hay');
    var user_record = yield users.getUser(user_info);
    console.log(user_record);
    let notes = new Notes(db);
    var user_id = user_record.value._id;
    yield notes.saveNote(user_id, '20160911', 'haaay');
    yield notes.saveNote(user_id, '20160911', 'overwrite');
    yield notes.saveNote(user_id, '20160918', 'new');

    db.close();
    return {
      result: 'ok'
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

module.exports = router;
