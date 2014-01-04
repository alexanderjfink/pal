define(['backbone'], function () {
	var PracticeSessionModel = Backbone.Model.extend({
			// Properties

			// Backbone

			// The difference between urlRoot and url is that AJAX operations
			// will append the ID to the end of the urlRoot for GET, PUT and DELETE.
			urlRoot: '/api/task',

	});

	return PracticeSessionModel;
});