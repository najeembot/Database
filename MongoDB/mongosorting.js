const MongoC = require("mongodb").MongoClient

const url = "mongodb://localhost:27017"

let db, sort

MongoC.connect(url, function(err, client){
	if (err) console.log("Error occured: "+err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    sort = {_id: 1}
    db.collection("students").find({}).sort(sort).toArray(function(err, res){
    	if (err) console.log(err)
    	console.log(res)
        client.close()
    })
})