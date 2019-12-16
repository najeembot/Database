// making the connection to a mongodb database
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/node_db"
MongoClient.connect(url, function(err, client) {
	if (err) console.log(err)
	console.log("Connected!")
    client.close()
})