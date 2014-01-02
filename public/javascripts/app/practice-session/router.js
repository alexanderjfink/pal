define(['backbone'], function (Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'': 'loadPage',
			':page': 'loadPage',
		},

		loadPage: function (page) {
			page = page || "setup"
			require(['app/practice-session/' + page + '/view'], function (pageView) {
				var view = new pageView();
				view.bootstrap();
				$('#main').html(view.$el);
			});
		}
	});

	return Router;
});