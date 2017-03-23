define(['jquery','backbone','text!/tpl/navigation.html'],function($,Backbone,navigation){
	var resUrl = '/res.json';
	
	var ixNavigation = Backbone.View.extend({
		el:$('#tpl_navigation'),
		render:function(){
			var ajaxData = null;
			$.ajax({
				url:resUrl,
				async:false
			})
			.done(function(req){
		    	ajaxData = req;
			})
			var navdata = ajaxData;
			var compiledTemplate = _.template(navigation);
			var renderdata = compiledTemplate(navdata)
			this.$el.html(renderdata)
			return this;
		}
	})
	return ixNavigation;
})