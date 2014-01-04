define(['backbone'], function () {
	var Video = Backbone.Model.extend({
			// Properties

			// Backbone
			defaults: {
				id: "",	
				duration: "",	
				piece: "",	
				key: "",	
				medium: "",	
				approach: "",
				teacherSex: "",	
				level: "",
				tags: []		
			},

			// The difference between urlRoot and url is that AJAX operations
			// will append the ID to the end of the urlRoot for GET, PUT and DELETE.
			urlRoot: '/api/task',

	});

	return Video;
});