var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
const input = parseInt(process.argv[2],10)

mongo.connect(url, (err, db) => {
  if (err) console.error(err)
  const collection = db.collection('parrots')
  collection.count(
  {age: {$gt: input}},
  (err, count) => {
    if (err) throw err
    console.log(count)
    db.close()
  })
})

// Official solution
// var mongo = require('mongodb').MongoClient
// var age = process.argv[2]
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var parrots = db.collection('parrots')
//   parrots.count({
//     age: {
//       $gt: +age
//     }
//   }, function(err, count) {
//     if (err) throw err
//     console.log(count)
//     db.close()
//   })
// })
