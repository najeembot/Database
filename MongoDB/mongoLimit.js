const mongoC = require("mongodb").MongoClient

const url = "mongodb://localhost:27017"

let db

// limiting data query
mongoC.connect(url, function(err, client){
	if (err) console.log(err)
	console.log("Connected...")
    db = client.db("node_db")
    db.collection("students").find({}).limit(2).toArray(function(err, res){
    	if (err) console.log(err)
        console.log(JSON.stringify(res))
        client.close()
    })
})