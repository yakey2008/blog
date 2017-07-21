$(function () {
    var init = function () {
        var dom = $('.inside-container');
        dom.height($('.main').height()-$('.header').height()-$('.item-box-title').height()-70);
        dom.getNiceScroll().resize();
        dom.niceScroll({
            cursorwidth: 8,
            cursorcolor: '#3fa2fb',
            cursorborder: 'none',
            cursorborderradius: 4,
            autohidemode: 'leave'
        });
    }
    

    //窗口变化事件
    $(window).resize(function () {
       window.setTimeout(function() {
           init();
       }, 100); 
    })
    init();
})