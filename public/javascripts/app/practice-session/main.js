define(['./router'], function (router) {
	var app = {};
	
    app.router = new router();

    Backbone.history.start({ pushState: false });

    return app;
});