define(['./router', './models/practiceSessionModel'], function (Router, PracticeSessionModel) {
	var app = {};
	
    app.router = new Router();

    app.state = {
    	practiceSession: new PracticeSessionModel()
    };

    Backbone.history.start({ pushState: false });

    return app;
});