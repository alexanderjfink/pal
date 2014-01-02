define(['backbone', 'text!./app.html', '../collections/practiceSessionCollection'], function (Backbone, template, practiceSessionCollection) {

	var view = Backbone.View.extend({
		// Properties

		template: _.template(template),

		// Backbone
		initialize: function () {
			this.collection = new practiceSessionCollection();
		},

		// Bootstrap

		bootstrap: function () {
			return this.render();
		},

		events: {
		},

		// Rendering
		render: function () {
			this.$el.html(this.template());
			// this.stickit();
			return this;
		},


		// Backbone Events
		// UI Events

		// Methods
	});

	return view;

});