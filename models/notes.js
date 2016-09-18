/* @flow */

import type { MongoClient } from 'mongodb';
import type { ObjectId } from 'mongodb';

export class Notes {
  db: MongoClient;

  constructor(db: MongoClient) {
    this.db = db;
  }

  saveNote(user_id: string, week_id: string, contents: string) {
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

    var notes_db = this.db.collection('notes');
    var users_db = this.db.collection('users');
    return async function() {
			// Save note in notes.
      var result = await notes_db.findOneAndUpdate(query, doc, options);
      if (!result) {
        return;
      }
      var note_id = result.value._id;
      // Update user array of notes if it doesn't already exist.
      var update_user_query = { '_id': user_id };
      var update_user_doc = { '$addToSet': { 'notes':  note_id } };
      await users_db.update(update_user_query, update_user_doc);
    }();
  }

  getNotesByIds(note_ids: ObjectId[]) {
    if (!note_ids) return Promise.resolve([]);
    var notes_db = this.db.collection('notes');
    return notes_db.find({_id: { $in : note_ids } } ).toArray();
  }
};
