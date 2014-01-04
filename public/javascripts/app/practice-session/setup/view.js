define(['backbone', 'text!./setup.html'], function (Backbone, template) {

	var SetupView = Backbone.View.extend({
		// Properties


		template: _.template(template),

		// Backbone

		initialize: function (options) {
			if (!this.model) {
				throw 'Model required you fool.'
			}
		},

		events: {
			'click #start-session': 'onStartSessionButtonClick',
			'change #instrument': 'onInstrumentChange'
		},

		// Bootstrap

		bootstrap: function () {
			return this.render();
		},

		// Stickit bindings
		bindings: {
			'#instrument': 'instrument',
			'.have-instrument': 'haveInstrument',
			'#piece': 'piece',
			'#hours': 'hours',
			'#minutes': 'minutes',
		},

		// Rendering

		render: function () {
			this.$el.html(this.template());
			this.stickit();
			
			return this;
		},

		// Backbone Events

		// UI Events
		
		onStartSessionButtonClick: function(e) {
			e.preventDefault();
			app.router.navigate('interface', { trigger: true });
			// TODO: SAVE MODEL
			// this.model.save().then(function () {});
		},

		onInstrumentChange: function(e) {
			$('#have-instrument-option').toggle($('#instrument').val() !== 'no-instrument');
		}

		// Methods
	});

	return SetupView;

});