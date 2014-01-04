define(['../models/videoModel', 'moment'], function (VideoModel, moment) {

	var PlaylistCollection = Backbone.Collection.extend({
		// Properties

		// Backbone

		// Be sure to set the model _type_ and not an instance of it
		model: VideoModel,

		// Set the URL here so you can fetch on the collection and hit a list endpoint.
		// Note it's not baseUrl because collections don't have IDs.
		url: '/api/task',

		search: function (q) {
			return this.where(q);
		},

		generate: function(params) {
			// based on a set of paramters {}, generate a playlist that is less than the duration

			var list = {}, finalList = {};
			var playlistDuration = moment.duration(params.duration || "00:05:00");

			list = this.search(params);

			// shuffle list for random playlist
			list = _.shuffle(list);

			// select for maximum duration using the wonders that are MomentJS

			var listDuration = moment.duration("00:00:00"); // total duration of the list so far
			list = _.each(this.models, function (video) {
				// if item has a duration (it should or we won't bother with it) AND the current item in addition to the rest of 
				// the items is LESS than the total duration we want for this session, add the video to the final list
				var videoDuration = video.get('duration');

				if (videoDuration) {
					videoDuration = moment.duration(videoDuration); // duration of this video

					var tempDur = listDuration; // temporary duration so we can add for comparison
					if (tempDur.add(videoDuration) < playlistDuration) {
						listDuration.add(videoDuration); // this worked, so lets really add it
						finalList[video.id] = video; // add the video
					}
				}
			});

			return finalList;
		}

	});

	return PlaylistCollection;
});