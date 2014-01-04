define(['../models/viewerModel'], function (viewerModel) {
	var viewerCollection = Backbone.Collection.extend({
		// Properties

		// Backbone

		// Be sure to set the model _type_ and not an instance of it
		model: viewerModel,

		// Set the URL here so you can fetch on the collection and hit a list endpoint.
		// Note it's not baseUrl because collections don't have IDs.
		url: '/api/task',

		getVideos: function (query) {
			// var videos = _.where(this.get('videos'), query);
			return this.where(query);
		},
	});

	return viewerCollection;
});