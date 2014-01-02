define(['backbone', 'text!./app.html', '../models/practiceSessionModel', '../settings/view'], function (Backbone, template, practiceSessionModel, settingsView) {

	var view = Backbone.View.extend({
		// Properties

		template: _.template(template),

		// Backbone
		initialize: function () {
			if (!this.model) {
				throw 'Model required you fool.';
			}
		},

		// Bootstrap

		bootstrap: function () {
			return this.render();
		},

		events: {
		},

		// Stickit bindings
		bindings: {
			'.instrument': 'instrument',
			'.have-instrument': 'haveInstrument',
			'.piece': 'piece',
			'.hours': 'hours',
			'.minutes': 'minutes'
		},

		// Rendering

		render: function () {
			this.$el.html(this.template());
			this.stickit();
			
			// Render settings view
			this.renderSettings();

			return this;
		},

		renderSettings: function (model) {
			var settings = new settingsView({ el: $("#settingsList") });
			// settings.stickit();
			settings.bootstrap();

			return settings.$el;
		},

		// Backbone Events
		// UI Events

		// Methods
	});

	return view;

});