var Mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

Mongo.connect( url, function(err,db){
	if(err) throw err;
	var dbo = db.db('school');
	var query = { firstname : /^A/ };
	dbo.collection('student').find(query).toArray(function(err,result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
});