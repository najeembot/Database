var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

// left outer join equivalent in mongodb with lookup operator inside aggregation pipeline
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("node_db");
  dbo.collection('students').aggregate([
    { $lookup:
       {
         from: 'teachers',
         localField: '_id',
         foreignField: 'student_id',
         as: 'students&Teachers'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});