Template.add_location.helpers({
	latitude: function () {
		// ...
		var latitude = Session.get('location').latitude;
		return latitude;
	},
	longitude: function() {
		// body...
		var longitude = Session.get('location').longitude;
		return longitude; 
	}
});