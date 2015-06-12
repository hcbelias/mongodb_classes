var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
    if(err) throw err;
	
	db.collection('students').find({}, {}, function(err2, cursor) {
		if(err2) throw err2;

		if(cursor == null) {
			return db.close();
		}
		
		cursor.each(function(err, doc){
			if(err) throw err;
			debugger;
			
		});
		
	});
});
