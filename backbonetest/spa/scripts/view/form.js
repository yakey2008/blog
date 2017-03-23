define(['jquery','backbone','text!/tpl/form.html'],function($,Backbone,form){
	var resUrl = '/res.json';
	
	var ixForm = Backbone.View.extend({
		el:$('#mainland'),
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
			var compiledTemplate = _.template(form);
			var renderdata = compiledTemplate(navdata)
			this.$el.html(renderdata)
			return this;
		}
	})
	return ixForm;
})