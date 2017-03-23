require.config({
	baseUrl: '/',
	shim: {
		underscore: {exports: '_'},
	},
	paths: {
		jquery: '/bower_components/jquery/dist/jquery',
		underscore: '/bower_components/underscore/underscore',
		backbone: '/bower_components/backbone/backbone',
		bootstrap:'/bower_components/backbone/bootstrap/bootstrap',
		text:'/lib/text'
	}
});
require(['jquery', 'backbone', 'scripts/main'], function($, Backbone, main) {
	main.init();
});