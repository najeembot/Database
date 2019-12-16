const MongoC = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/node_db"
// creating the collection int mongodb
MongoC.connect(url, function(err, client){
	if (err) console.log(err)
	console.log("Connected!\n")
    let db = client.db("node_db")
    db.createCollection("students", function(err, res){
    	if (err) console.log(err)
    	console.log("Collection is created!")
        client.close()
    })
})