Template.sidebar.onCreated(function() {
	// body...
	this.subscribe('categories');
})

Template.sidebar.helpers({
	categories: function () {
		// ...
		return Categories.find({}, {
			
			sort: {
				name: 1
			}
		});
	}
});
/*Template.sidebar.helpers({
	places: function () {
		// ...
		return Places.find({}, {
			
			sort: {
				types: "Categories.findOne({
					
					sort: Sort specifier,
					skip: Number,
					fields: Field specifier,
					reactive: Boolean,
					transform: Function
					
				});"
			}
			
		});
	}
});*/