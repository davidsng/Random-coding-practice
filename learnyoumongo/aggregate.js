var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
const input = process.argv[2]

mongo.connect(url, (err, db) => {
  if (err) console.error(err)
  const collection = db.collection('prices')
  collection.aggregate([
    { $match: { size: input } },
    { $group:
      { _id : 'avgPrice',
      avgPrice: { $avg: '$price'}}
    }]).toArray(function (err, results) {
    if (err) throw err
    var data = results[0]
    console.log(Number(data.avgPrice).toFixed(2))
    db.close()
  })
})

// Official solution:
// var mongo = require('mongodb').MongoClient
// var size = process.argv[2]
//
// var url = 'mongodb://localhost:27017/learnyoumongo'
//
// mongo.connect(url, function(err, db) {
//   if (err) throw err
//   var prices = db.collection('prices')
//   prices.aggregate([
//     { $match: {
//       size: size
//     }}
//   , { $group: {
//       _id: 'total'
//     , total: {
//         $avg: '$price'
//       }
//     }}
//   ]).toArray(function(err, results) {
//     if (err) throw err
//     if (!results.length) {
//       throw new Error('No results found')
//     }
//     var o = results[0]
//     console.log(Number(o.total).toFixed(2))
//     db.close()
//   })
// })
