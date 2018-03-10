
function doEntriesFixtures() {
	let entries = [
		{
			'title': 'Rowenta Staubsauger',
			'description': 'Dieser Rowenta Staubsauger hat Beutel, die 3 Liter fassen. Ich vermiete den Staubsauger mit einem leeren Beutel. Beim Saugen kann man verschiedene Stufen einstellen. ',
			'image': {
				'imgurId': 'MBM67Z8',
				'uri': 'https://i.imgur.com/MBM67Z8.jpg'
			},
			'address': 'Selnaustrasse 46, 8001 Zürich',
			'dailyPrice': 3,
			'depo': 50

		}
	]
	entries.forEach(entry => {
		Entries.insert(entry);
	});
}

Meteor.startup(() => {
	if(Entries.find().count() == 0){
		doEntriesFixtures();
	}
});

