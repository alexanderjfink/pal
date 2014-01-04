define(['text!./settings.html'], function (template) {

	var SettingsView = Backbone.View.extend({
			// Properties

			template: _.template(template),

			// Backbone

			initialize: function () {
			},

			events: {
			},

			// Bootstrap

			bootstrap: function () {
				this.render();
			},

			// Rendering

			render: function () {
				this.$el.html(this.template());
			},

			// UI Events

			// Backbone Events

			// Methods
	});

	return SettingsView;

});