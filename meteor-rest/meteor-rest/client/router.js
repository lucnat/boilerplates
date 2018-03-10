
Meteor.startup(() => {
	Router.route('/', function () {
		this.render('refugium');
	});
});
