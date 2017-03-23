var humanInfo = Backbone.Model.extend({
	urlRoot:"/res.json",
	initialize:function(){
		name:"",
		age:"",
		hobby:""
	}
})

var human = new humanInfo();

