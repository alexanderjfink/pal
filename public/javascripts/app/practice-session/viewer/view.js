define(['text!./templates/viewer.html','./collections/viewerCollection'], function (template, viewerCollection) {

	var ViewerView = Backbone.View.extend({
					// Properties

					template: _.template(template),

					// Backbone

					initialize: function () {

						this.collection = new viewerCollection();
						
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

						// Don't try to load video until DOM is rendered.
						_.defer(this.initVideo);

						alert(this.collection.getVideos({"level": "Beginner"}));
					},

					// UI Events

					onPlayButtonClick: function (e) {
						e.preventDefault();

						var player = this.$('#player-container').data('player');
						player.p.play();
					},

					onPauseButtonClick: function (e) {
						e.preventDefault();

						var player = $('#player-container').data('player');
						player.p.stop();
					},

					// Backbone Events

					// Methods
					initVideo: function() {
						$('#player-container').player({
							video: 'ylLzyHk54Z0',
							events: {
								play: (function () {
								}),
								stop: (function () {

								}),
							 	end: (function () {
							 		// switch between the player and the info container
							 		var hideoptions = {  "direction" : "left",  "mode" : "hide"};
									var showoptions = {"direction" : "right","mode" : "show"};

							 		$('#player-container').effect('slide', hideoptions, 1000);
							 		$('#info-container').effect('slide', showoptions, 1000);
							 		// repopulate the other with the next data
							 	})
							}
						});
					},

					switchPlayerAndInfo: function () {
						console.log("Here");
					}


	});

	return ViewerView;

});