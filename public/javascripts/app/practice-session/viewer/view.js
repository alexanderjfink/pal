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

			// window.app.playlist = this.playlist.generate({	
			// 												medium: this.model.get('instrument'), 
			// 												piece: this.model.get('piece'), 
			// 												duration: this.model.get('minutes')
			// 											});

			// shim'd code
			// should actually do something more like above
			window.app.playlist = []
			switch(this.model.get('instrument')) {
				case "no-instrument":
					
					window.app.playlist.push(this.playlist.search({id: "2o5NUsrdx30"})[0]);
					window.app.playlist.push(this.playlist.search({id: "H6XU67-LcVY"})[0]);
					window.app.playlist.push(this.playlist.search({id: "5VqXPSXRaXg"})[0]);
					window.app.playlist.push(this.playlist.search({id: "Vnqe2-nGqT8"})[0]);
					window.app.playlist.push(this.playlist.search({id: "kE-caJdtCmI"})[0]);
					break;

				case "cello":
					if (this.model.get('haveInstrument') === "No") {
						window.app.playlist.push(this.playlist.search({id: "G2CEFh3267k"})[0]);
						window.app.playlist.push(this.playlist.search({id: "D9QNjwC_v1Y"})[0]);
						window.app.playlist.push(this.playlist.search({id: "7mgctuOigu4"})[0]);
						window.app.playlist.push(this.playlist.search({id: "Vnqe2-nGqT8"})[0]);
						window.app.playlist.push(this.playlist.search({id: "VDj5X_qAwG8"})[0]);
					} else {
						// If the user selects Cello, yes instrument, then show these videos, in this order
						window.app.playlist.push(this.playlist.search({id: "DsstHUbxozM"})[0]);
						window.app.playlist.push(this.playlist.search({id: "QAEBuYNOook"})[0]);
						window.app.playlist.push(this.playlist.search({id: "H6XU67-LcVY"})[0]);
						window.app.playlist.push(this.playlist.search({id: "L9qsbklfZoY"})[0]);
						window.app.playlist.push(this.playlist.search({id: "Zuteq9-Ru20"})[0]);
					}

					break;

				default:

					window.app.playlist.push(this.playlist.search({id: "2o5NUsrdx30"})[0]);
					window.app.playlist.push(this.playlist.search({id: "H6XU67-LcVY"})[0]);
					window.app.playlist.push(this.playlist.search({id: "5VqXPSXRaXg"})[0]);
					window.app.playlist.push(this.playlist.search({id: "Vnqe2-nGqT8"})[0]);
					window.app.playlist.push(this.playlist.search({id: "kE-caJdtCmI"})[0]);
			}
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