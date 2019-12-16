const mongoC = require("mongodb").MongoClient;

const url = "mongodb://localhost:27017/node_db"
// deleting one document
mongoC.connect(url, function(err, client) {
	if (err) console.log("Error occured: "+err+"\n")
	console.log("Connected to MongoDB...\n")
    client.db("node_db").collection("students").deleteOne({name:/a/i}, function(err, obj) {
    	if (err) console.log(err)
    	console.log("Number of documents deleted: "+obj.result.n)
        client.close()
    })
})
// deleting many documents
mongoC.connect(url, function(err, client){
	if (err) console.log(err+"\n")
	console.log("Connected...\n")
    client.db("node_db").collection("students").deleteMany({name:/^a/i}, function(err, obj){
    	if (err) console.log(err)
    	console.log("Number of documents deleted: "+obj.result.n)
        client.close()
    })
})