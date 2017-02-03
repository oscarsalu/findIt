Meteor.startup(function(){
	if (Meteor.isClient) {
	navigator.geolocation.getCurrentPosition(success);
	}
});

success = function(position){
	Session.set('location', position);
};
