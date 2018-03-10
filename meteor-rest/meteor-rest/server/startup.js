import { Meteor } from 'meteor/meteor';
import SlackAPI from 'node-slack';

Meteor.startup(() => {

	// Enable cross origin requests for all endpoints
	JsonRoutes.setResponseHeaders({
	  "Cache-Control": "no-store",
	  "Pragma": "no-cache",
	  "Access-Control-Allow-Origin": "*",
	  "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
	  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
	});

	// need this in order to do geo sorting
	Entries._ensureIndex({'location': '2dsphere'});
	
	// for facebook login
	ServiceConfiguration.configurations.remove({
	    service: "facebook"
	});
	ServiceConfiguration.configurations.insert({
	    service: "facebook",
	    appId: 'appId',
	    secret: 'appSecret'
	});

	// admin stuff
	Houston.add_collection(Meteor.users);
	Houston.add_collection(Houston._admins);

	// slack :	Slack.send({ 'text': '*Test* \nTestnachricht. Jeiiii!'});
	Slack = new SlackAPI('https://hooks.slack.com/services/something/something');

});
