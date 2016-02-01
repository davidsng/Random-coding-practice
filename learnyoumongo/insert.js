var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
const firstName = process.argv[2]
const lastName = process.argv[3]

mongo.connect(url, function(err,db) {
  if (err) console.error(err)
  const collection = db.collection('docs')
  collection.insert(
    { 'firstName': firstName, 'lastName': lastName }
  , function (err, data) {
    if (err) console.error(err)
    const answer = JSON.stringify({ 'firstName': firstName, 'lastName': lastName })
    console.log(answer)
    db.close()
  })})


// Official solution:
  var mongo = require('mongodb').MongoClient

      var firstName = process.argv[2]
      var lastName = process.argv[3]
      var doc = {
        firstName: firstName
      , lastName: lastName
      }

      var url = 'mongodb://localhost:27017/learnyoumongo'
      mongo.connect(url, function(err, db) {
        if (err) throw err
        var collection = db.collection('docs')
        collection.insert(doc, function(err, data) {
          if (err) throw err
          console.log(JSON.stringify(doc))
          db.close()
        })
      })
