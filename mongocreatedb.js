var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/school";

Mongo.connect( url, function(err,db){
	if(err) throw err;
	console.log('We have successfully created the school database');
	db.close();
});