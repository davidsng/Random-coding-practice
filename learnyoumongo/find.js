var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo"
// const age = process.argv[2]
const age = parseInt(process.argv[2], 10)  // do this to convert string to integer

mongo.connect(url, function(err,db) {
  if (err) console.error(err)
  const collection = db.collection('parrots')
  collection.find({
    "age": {"$gt": age}
  }).toArray(function(err, documents) {
    if (err) console.error(err)
    console.log(documents)
    db.close()
  })
})
