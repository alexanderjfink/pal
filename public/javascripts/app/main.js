requirejs.config({
	baseUrl: '/javascripts/vendor',
	paths: {
		app: '../app',
		text: 'requirejs-text/text',
		jquery: 'jquery/jquery',
		backbone: 'backbone/backbone',
		stickit: 'backbone.stickit/backbone.stickit',
		underscore: 'underscore/underscore',
		fastclick: 'fastclick/fastclick',
		foundation: 'foundation/foundation',
		tube: 'jquery.tube/jquery.tube',
		jQueryUI: 'jquery-ui/jquery-ui'
	},
	shim: {
		'backbone': {
			//These script dependencies should be loaded before loading
			//backbone.js
			deps: ['underscore', 'jquery'],
			//Once loaded, use the global 'Backbone' as the
			//module value.
			exports: 'Backbone'
		},
		'underscore': {
				exports: '_'
		},
		'jQueryUI': {
			export:"$",
			deps: ['jquery']
		}
	},

});

require(['jquery', 
		'jQueryUI',
		'stickit', 
		'app/practice-session/main'], function ($, jQueryUI, stickit, app) {
	
	window.app = app;

	// Load up foundation and jQuery.tube once page is loaded
	setTimeout(function() {
		require(['foundation', 'tube'], function (foundation) {
			$(document).foundation();
		});
	});
	
	
	// This makes links hit the router instead of redirecting
	$(document).on("click", "a[href]:not([data-bypass])", function(evt) {
		// Get the absolute anchor href.
		var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
		// Get the absolute root.
		var root = location.protocol + "//" + location.host;// + app.root;

		// Ensure the root is part of the anchor href, meaning it's relative.
		if (href.prop.slice(0, root.length) === root) {
			// Stop the default event to ensure the link will not cause a page
			// refresh.
			evt.preventDefault();

			// `Backbone.history.navigate` is sufficient for all Routers and will
			// trigger the correct events. The Router's internal `navigate` method
			// calls this anyways. The fragment is sliced from the root.
			Backbone.history.navigate(href.attr, true);
		}
	});
});