Router.configure({
  layoutTemplate: 'layout'
});

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
  this.route('places', {path: "/"});
  this.route('place', {path: "/p/:_id"});
  this.route('home', {
    path: "/map",
    layoutTemplate: "appLayout"
});
  this.route('categories',{
    path: "/categories/:name",
    data: function() {
      var currentName = this.params.name;
      templateData = {
          place2 : Places.find({types : currentName})   
      };
      return templateData;
    }
  });

  this.route('add_location',{
    path :'/add_location',
    template: 'add_location',
    data: function() {
      templateData = {
        categories : Categories.find()
      };
      return templateData;
    }
  })

});
