(function($){
  var restfulUrl = '/res.json';
  var data = {};
  var restfulapp = Backbone.Router.extend({
    routes:{
      "user/:name":"getName",
      "user/:age":"getAge",
      "user/hobbys/:id":"getHobby",
      "*page":"defaultPage"
    }
  })
  var restful_app = new restfulapp;
  restful_app.on("route:defaultPage",function(page){
    if(page){
      $('#content-pane').text('书写，记忆，运用')
    }
  })
  restful_app.on("route:getName",function(getname){
    meloading()
    $.ajax({
      url:restfulUrl,
      dataType:"json"
    })
    .done(function(res){
      $('#content-pane').text(res[getname])
    })
  })

  restful_app.on("route:getAge",function(getage){
    meloading()
    $.ajax({
      url:restfulUrl,
      dataType:"json"
    })
    .done(function(res){
      $('#content-pane').text(res[getage])
    })
  })

  restful_app.on("route:getHobby",function(gethobby){
    meloading()
    $.ajax({
      url:restfulUrl,
      dataType:"json"
    })
    .done(function(res){
      $('#content-pane').text(res.hobby[gethobby])
    })
  })
  function meloading(){
    $("#content-pane").text( "读取中..." );
  }
  Backbone.history.start();
})(jQuery)