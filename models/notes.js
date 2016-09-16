var co = require('co');

export class Notes {
  constructor(db) {
    this.db = db;
  }

  saveNote(user_id, week_id, contents) {
    var query = {'week_id': week_id};
    var doc = {
      '$set': {
        week_id: week_id,
        contents: contents
      }
    };
    var options = {
      upsert: true,
      returnOriginal: false 
    };
    console.log('save note');
    console.log(query);

    var notes_db = this.db.collection('notes');
    var users_db = this.db.collection('users');
    return co(function* () {
    // Save note in notes.
      var result = yield notes_db.findOneAndUpdate(query, doc, options);
      console.log(result);
   
      console.log('update user');
      var note_id = result.value._id;
      // Update user array of notes if it doesn't already exist.
      var update_user_query = { '_id': user_id };
      var update_user_doc = { '$addToSet': { 'notes':  note_id } };
      console.log(update_user_query, update_user_doc);
      yield users_db.update(update_user_query, update_user_doc);
    });
  }

  getNotesByIds(note_ids) {
    if (!note_ids) return Promise.resolve([]);
    var notes_db = this.db.collection('notes');
    return notes_db.find({_id: { $in : note_ids } } ).toArray();
  }


};
