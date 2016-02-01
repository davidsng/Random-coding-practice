
  var mongo = require('mongodb').MongoClient
  var url = "mongodb://localhost:27017/learnyoumongo"
  const input = process.argv[2]  // do this to convert string to integer

  mongo.connect(url, (err,db) => {
    if (err) console.error(err)
    const collection = db.collection('users')
    collection.update(
      {"username": "tinatime"},
      {$set : {"age" : 40}}
    ,(err, data) => {
      if (err) throw err
      console.log(data)
      db.close()
    })})
