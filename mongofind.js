var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

Mongo.connect( url, function(err, db){
	if(err) throw err;
	var dbo = db.db('school');
	dbo.collection('student').findOne({}, function(err, result){
		if(err) throw err;
		console.log("First Name : " + result.firstname + " Last Name :  " + result.lastname);
		db.close();
	});
});