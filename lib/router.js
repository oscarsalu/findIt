Router.configure({
	layoutTemplate:"appLayout"
})


Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }

    Session.setDefault('hasHeader', 'false');
    Session.set('hasHeader', 'false');
  }
});

Router.map(function() {
  this.route('home', {path: "/"});
});