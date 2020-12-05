var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

Mongo.connect( url, function(err,db){
	if(err) throw err;
	var dbo = db.db('school');
	dbo.createCollection('student', function(err,res){
		if(err) throw err;
		console.log('We have successfully created the student Collection');
		db.close();
	})
});