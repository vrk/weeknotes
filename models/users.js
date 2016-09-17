var assert = require('assert');

export class Users {
  constructor(db) {
    // MongoDb
    this.db = db;
  }

  getUser(user_info) {
    var collection = this.db.collection('users');
    var query = {'gmail_id': user_info.gmail_id};
    var doc = {
      $set: {
        'gmail_id': user_info.gmail_id,
        'email': user_info.email
      }
    };
    var options = {
      upsert: true,
      returnOriginal: false 
    };
    return collection.findOneAndUpdate(query, doc, options);
  }
};
