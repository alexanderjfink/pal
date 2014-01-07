define(['text!./templates/viewer.html', 
		'../common/models/videoModel', 
		'../common/collections/playlistCollection', 
		'./data/videoData'], function (template, VideoModel, PlaylistCollection, videoData) {

	var ViewerView = Backbone.View.extend({
		// Properties

		template: _.template(template),

		// Backbone

		initialize: function () {
			// TEMPORARY
			// Temporarily assembles playlist
			this.playlist = new PlaylistCollection();

			for (var i = 0; i < videoData.length; i++) {
				this.playlist.add(new VideoModel(videoData[i]));
			}

			window.app.playlist = this.playlist.generate({	
															medium: this.model.get('instrument'), 
															piece: this.model.get('piece'), 
															duration: this.model.get('minutes')
														});
			
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

		onPlayerReady: function () {
			window.player.playVideo();
			this.$('#start-playback').hide();
		},

		onPlayButtonClick: function (e) {
			e.preventDefault();

			window.player.playVideo();
			this.$('#start-playback').hide();
			this.$('#pause-playback').show();
		},

		onPauseButtonClick: function (e) {
			e.preventDefault();

			window.player.pauseVideo();
			this.$('#pause-playback').hide();
			this.$('#start-playback').show();
		}

		// Backbone Events

		// Methods


	});

	return ViewerView;

});