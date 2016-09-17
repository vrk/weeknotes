const { MongoClient } = require('mongodb');
var assert = require('assert');

// Local connection URL
var url = process.env.MONGODB_URI;

export function getDatabase() {
  return new Promise((resolve, reject) => {
    MongoClient.connect(url, (err, db) => {
      assert.equal(null, err);
      console.log('Connected successfully to server');
      resolve(db);
    });
  });
}

