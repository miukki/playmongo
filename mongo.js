var MongoClient, Q, dbDeffered, mongodb;

mongodb = require('mongodb');

Q = require('kew');

dbDeffered = Q.defer();

MongoClient = mongodb.MongoClient;


MongoClient.connect('mongodb://localhost:27017/newdb', function(err, db) {
  if (err) {
    return dbDeffered.reject(err);
  } else {
    console.log('connect');
    return dbDeffered.resolve(db);
  }
});

module.exports.db = dbDeffered;
