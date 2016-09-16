var assert = require('assert');

export class Users {
  constructor(db) {
    // MongoDb
    this.db = db;
  }

  getUser(user_info) {
    var collection = this.db.collection('users');
    var query = {'gmail_id': user_info.gmail_id};
    var sort =  [['gmail_id', 1]];
    var doc = {
      'gmail_id': user_info.gmail_id,
      'email': user_info.email,
      'display_name': user_info.display_name 
    };
    var options = {
      upsert: true,
      new: true
    };
    return collection.findAndModify(query, sort, doc, options);
  }
};
