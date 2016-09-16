var assert = require('assert');

export class Users {
  constructor(db) {
    // MongoDb
    this.db = db;
  }

  getUser(google_id, callback) {
    var collection = this.db.collection('users');

    collection.find({'gmail_id': gmail_id}).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });      
  }
};
