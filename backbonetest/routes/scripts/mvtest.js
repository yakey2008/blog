/*global haleback, $*/


// window.haleback = {
//   Models: {},
//   Collections: {},
//   Views: {},
//   Routers: {},
//   init: function () {
//     'use strict';

//   }
// };

// $(document).ready(function () {
//   'use strict';
//   haleback.init();
// });

var searchView = Backbone.View.extend({
  initialize:function(){
    this.render();
  },
  render:function(){
    var variables = {label_search : "search it"}
    var template = _.template($('#seach_template').html(),variables);
    this.$el.html(template)
    console.log(variables)
  },
  events:{
    "click input[type=button]":"doSearch"
  },
  doSearch:function(event){
    alert("search for "+$('#search_input').val())
  }
})

var AppRouter = Backbone.Router.extend({
  routes:{
    "posts/:id":"getPost",
    "*actions":"defaultRoute"
  }
})

var search_view = new searchView({el:$('#search_container')})

var app_router = new AppRouter;
app_router.on('route:defaultRoute',function(actions){
  console.log(actions)
})
app_router.on('route:getPost',function(id){
  console.log(id)
})
Backbone.history.start();