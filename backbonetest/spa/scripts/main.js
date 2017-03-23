define(['jquery','backbone','scripts/view/home','scripts/view/navigation','scripts/view/form'],function($,Backbone,home,navigation,form){
	var resUrl = '/res.json';

	var restfulapp = Backbone.Router.extend({
		routes:{
			"article/:list":"getList",
			"conversation/:form":"getForm",
			"*page":"defaultPage"
		}
	});

	var init=function(){
		var restfull_app = new restfulapp();
		restfull_app.on("route:defaultPage",function(){
			var navView = new navigation();
				navView.render();
			var homeView = new home();
				homeView.render();
		})

		restfull_app.on("route:getList",function(getlist){
		    console.log(getlist)
		})

		restfull_app.on("route:getForm",function(getform){
			var formView = new form();
				formView.render();
		})
		Backbone.history.start();
	}
	return {init:init};
})