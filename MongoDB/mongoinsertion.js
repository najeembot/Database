const MongoC = require("mongodb").MongoClient

const url = "mongodb://localhost:27017"

let d_id = 1
// inserting single document into mongodb collection
MongoC.connect(url, function(err, client){
	if (err) console.log(err)
	console.log("Connected!\n")
    let db = client.db("node_db")
    let obj = {"id":d_id,"name":"Alex", "Age":33, "Date":(new Date())}
    db.collection("students").insertOne(obj, function(err, res){
    	if (err) console.log(err)
    	console.log("Document inserted!\n")
        console.log(res)
        client.close()
    })
})
// inserting multiple document into mongodb collection

MongoC.connect(url, function(err, client) {
	if (err) console.log("Error occured! "+err+"\n")
	let dbm = client.db("node_db")
    let objm = [{"id":2, "name":"Joseph", "Age":33, "Date":(new Date())},{"id":2, "name":"Joon", "Age":33, "Date":(new Date())},{"id":2, "name":"Josh", "Age":33, "Date":(new Date())}]
    dbm.collection("students").insertMany(objm, function(err, res){
    	if (err) console.log(err)
    	console.log("Many Documents are Inserted: "+res.insertedCount)
        client.close()
    })
})