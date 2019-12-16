const mongoC = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"

let db, newValues, query
// updating one record
mongoC.connect(url, function(err, client){
	if (err) console.log(err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    query = {name:/^j/i}
    newValues = {$set:{name:"Jjj",grade:"xxx"}}
    db.collection("students").updateOne(query, newValues, function(err, res) {
    	if (err) console.log(err)
    	console.log("1 document updated!...")
        client.close()
    })
})
// updating many records
mongoC.connect(url, function(err, client){
	if (err) console.log(err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    query = {name:/^a/i}
    newValues = {$set:{name:"Joon",grade:"unknown"}}
    db.collection("students").updateMany(query, newValues, function(err, res) {
    	if (err) console.log(err)
    	console.log(res.result.nModified+" documents updated and "+res.result.ok)
        client.close()
    })
})