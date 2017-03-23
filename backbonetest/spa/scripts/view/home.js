define(['jquery','backbone','text!/tpl/home.html'],function($,Backbone,home){
	var resUrl = '/res.json';
	var HomeView = Backbone.View.extend({
		el:$("#mainland"),
		render:function(){
			var ajaxData = null;
			$.ajax({
				url:resUrl,
				async:false
			})
			.done(function(req){
		    	ajaxData = req;
		    	document.title = req.in_title;
			})
			var homedata = ajaxData;
			var compiledTemplate = _.template(home);
			var renderdata = compiledTemplate(homedata)
			this.$el.html(renderdata);
		}
	})
	return HomeView;
})