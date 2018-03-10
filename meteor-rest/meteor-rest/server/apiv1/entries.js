
ApiV1.addRoute('entries', {}, {
	get: {
		authRequired: false,
		action: function() {
			var entries = Entries.find().fetch();
			return {
				statusCode: 200,
				body: { data: entries }
			}
		}
	}, 
	post: {
		authRequired: false,
		action: function() {
			var incomingEntry = this.bodyParams;

			// validation
			var id = Entries.insert(incomingEntry);
			return {
				statusCode: 200,
				body: {data: Entries.findOne(id)}
			}
		}
	}
});



