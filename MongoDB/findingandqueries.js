const MongoC = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
let queryObject = {}, db
// finding one value from collection object
MongoC.connect(url, function(err, client) {
	if (err) console.log("Error occured: "+err+"\n")
	console.log("Connected...\n")
    db = client.db("node_db")
    db.collection("students").findOne(queryObject, function(err, res){
    	if (err) console.log(err)
    	console.log(res.name+"\n")
        client.close()
    })
})
// finding all from collection 
MongoC.connect(url, function(err, client){
	if (err) console.log(err)
	console.log("Connected...\n")
    let dba = client.db("node_db")
    dba.collection("students").find(queryObject).toArray(function(err, res){
    	if (err) console.log(err)
    	console.log(res)
        client.close()
    })
})
// finding some values
MongoC.connect(url, function(err, client){
	if (err) console.log(err)
	console.log("Connected again!...\n")
    let dbm = client.db("node_db")
    dbm.collection("students").find(queryObject, { projection: {_id: 0, name: 1, Age: 1 }}).toArray(function(err, res){
    	if (err) console.log("Error querying data..."+err+"\n")
    	console.log(res)
        client.close()
    })
})