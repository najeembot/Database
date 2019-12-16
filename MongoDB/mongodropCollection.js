const mongoC = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017"
let db
// dropping the reference to collection
mongoC.connect(url, function(err, client){
	if (err) console.log(err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    db.collection("students").drop(function(err, delOk){
    	if (err) console.log(err)
    	else if (delOk) console.log("Collection has been dropped!\n")
    	client.close()
    })
})
// dropping only by reference to database
mongoC.connect(url, function(err, client){
	if (err) console.log(err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    db.dropCollection("movie", function(err, delOk){
    	if (err) console.log(err)
    	else if (delOk) console.log("Collection has been dropped!\n")
    	client.close()
    })
})