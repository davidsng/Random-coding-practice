var mongo = require('mongodb').MongoClient
const database = process.argv[2]
var url = 'mongodb://localhost:27017/' + database
const input = process.argv[3]
const idToRemove = process.argv[4]

mongo.connect(url, (err, db) => {
  if (err) console.error(err)
  const collection = db.collection(input)
  collection.remove(
  {_id: idToRemove},
  (err, data) => {
    if (err) throw err
    console.log(data)
    db.close()
  })
})

// Official solution:
// var mongo = require('mongodb').MongoClient
// var url = 'mongodb://localhost:27017/' + process.argv[2]
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var collection = db.collection(process.argv[3])
//   collection.remove({
//     _id: process.argv[4]
//   }, function(err) {
//     if (err) throw err
//     db.close()
//   })
// })
