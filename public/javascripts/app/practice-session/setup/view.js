define(['backbone', 'text!./setup.html', '../collections/practiceSessionCollection'], function (Backbone, template, practiceSessionCollection) {

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
			'click #start-session': 'onStartSessionButtonClick',
			'change #instrument': 'onInstrumentChange'
		},

		// Stickit bindings
		bindings: {
			'#instrument': 'instrument',
			// '#have-instrument': 'haveInstrument',
			// '#piece': 'piece',
			// '#hours': 'hours',
			// '#minutes': 'minutes',
		},

		// Rendering
		render: function () {
			this.$el.html(this.template());
			// this.stickit();
			return this;
		},


		// Backbone Events
		// UI Events
		onStartSessionButtonClick: function(e) {
			console.log("Go go go!");
		},

		onInstrumentChange: function(e) {
			console.log($('#instrument').val());
			if ($('#instrument').val() != 'no-instrument') {
				$('#have-instrument-option').toggle();
			}
		}

		// Methods
	});

	return view;

});