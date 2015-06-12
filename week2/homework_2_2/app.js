var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/weather', function(err, db) {
    if(err) throw err;

	db.collection('data').distinct('State',  function(err2, docs) {
		if(err2) throw err2;

		if(docs == null) {
			return db.close();
		}
		
		var options = {
			'sort': [ ['Temperature','desc']]
		};
		docs.forEach(function(element, index, array){
		
			var query = { 'State' : element};
			var data = db.collection('data')
				.findOne( query, 
						  options,
						  function(err, doc) {
							doc.month_high = true;
							db.collection('data').update({ '_id': doc._id},  doc, function(obj1, obj2){
									
								
							} );
						  });
		});
	});
	
	
	
});
