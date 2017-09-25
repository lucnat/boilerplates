
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
	doParkingLotsFixtures();
});

function doParkingLotsFixtures() {
	if(ParkingLots.find().count() == 0) {
		let parkingLots = [
			{
				'name': 'RothstrasseWG vor dem Haus',
				'address': 'Rothstrasse 1, 8057 Zürich',
				'owner': 'Luca Naterop',
				'geolocation': {
					'lat': 47.393072,
					'lng': 8.534763
				},
				'size': 'normal'
			},
			{
				'name': 'Seefeld Parkplatz im Schatten',
				'address': 'Seefeldstrasse 40, 8003 Zürich',
				'owner': 'Richard Wegelaut',
				'geolocation': {
					'lat': 47.362700,
					'lng': 8.549722
				},
				'size': 'large'
			},
		]


		parkingLots.forEach(lot => {
			ParkingLots.insert(lot);
		});
		
	}
}
