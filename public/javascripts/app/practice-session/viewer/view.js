define(['text!./viewer.html'], function (template) {

		var viewerView = Backbone.View.extend({
						// Properties

						template: _.template(template),

						// Backbone

						initialize: function () {
							 // Render YouTube Player
							$.tube.defaults = {
								player: 'videoPlayer',
								autoload: false, // load the player automatically?
								autoplay: true,
								start: 0, // start video at offset
								order: 'relevance', // 'published', 'rating', 'viewCount'
								author: false,
								hide: 1, // 0 = always visible, 1 = hide progress bar and controls, 2 = hide progress bar
								controls: 1,
								version: 2,
								format: 5,
								limit: 10,
								key: false,
								render: true,
								truncate: false,
								at: '\n', // pattern (truncate)
								max: 140, // max length (truncate)
								omission: '…', // omission string (truncate)
								load: false, // plugin callback when the playlist data has been loaded
								complete: false, // plugin callback when the playlist html has been rendered
								click: false // plugin callback
							};

							$.player.defaults = {
								width: $(window).width()
							};
						},

						events: {
							'click #start-playback': 'onPlayButtonClick',
							'click #pause-playback': 'onPauseButtonClick'
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
						initVideo: function() {
							// TODO: Should eventually contain code that is in viewer.html for rendering
							// youtube player onload. Don't know how to do this yet.
						},

						onPlayButtonClick: function (e) {
							e.preventDefault();

							var player = $('#player-container').data('player');
							player.p.play();
						},

						onPauseButtonClick: function (e) {
							e.preventDefault();

							var player = $('#player-container').data('player');
							player.p.stop();
						}


		});

		return viewerView;

});