var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

Mongo.connect( url, function(err, db){
	if(err) throw err;
	var dbo = db.db('school');
	var mydoc = { firstname: "Abe", lastname: "Clark" };
	dbo.collection("student").insertOne(mydoc, function(err,res){
		if(err) throw err;
		console.log("Document successfully added");
		db.close();
	});
});