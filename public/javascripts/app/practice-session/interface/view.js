define(['backbone', 
		'text!./app.html', 
		'../models/practiceSessionModel', 
		'../settings/view', 
		'../viewer/view'], function (Backbone, template, practiceSessionModel, settingsView, viewerView) {

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

			// Render viewer view
			this.renderViewer();

			return this;
		},

		renderSettings: function () {
			var settings = new settingsView();
			// settings.stickit();
			settings.bootstrap();

			return this.$('#settings-list').html(settings.$el);
		},

		renderViewer: function () {
			var viewer = new viewerView();
			viewer.bootstrap();

			return this.$('#video-viewer').html(viewer.$el);
		}

		// Backbone Events
		// UI Events

		// Methods
	});

	return view;

});