Places = new Mongo.Collection('places');

/*Places.helpers({
  price: function() {
    return Array(this.price_level + 1).join('$');
  },
  tags: function() {
    var array = this.types;
    var str = array.join(', ');
    return str.replace(new RegExp('_', 'g'), ' ');
  }
});*/

Meteor.methods({
  'fetchNearbyLocations': function(coords) {
    if(Meteor.isServer) {
      results = HTTP.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + coords.latitude + "," + coords.longitude + "&radius=500&sensor=true&rankby=distance&key=AIzaSyBwtoKBzd3pR8S6C-LJvnN-cWUvheufc4A");
      _(results.data.results).each(function(loc) {
        _.extend(loc, {loc: {type: "Point", coordinates: [loc.geometry.location.lng, loc.geometry.location.lat]}});
        Places.upsert({id: loc.id}, {$set: loc});
      });
    }
  }
});