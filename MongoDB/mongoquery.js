const MongoC = require("mongodb").MongoClient

const url = "mongodb://localhost:27017"

let db, query
// querying through data of collection with regular expression
MongoC.connect(url, function(err, client){
	if (err) console.log("Error occured: " + err + "\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    query = {name: /^a/i}
    db.collection("students").find(query).toArray(function(err, res){
    	if (err) console.log(err)
    	console.log(res)
        client.close()
    })
})