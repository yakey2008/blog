jQuery(function ($) {
    $('#js-select2').select2({
        minimumResultsForSearch: Infinity,
        width: '180px'
    })

    //wrapper高度减上下外边
    $('.msg-item-container').height($('.wrapper').height() - 100);
    //wrapper高度减30上边30下边
    $('.aside').height($('.wrapper').height() - 30 - 30);
    //左侧滚动条优化
    $('.aside').niceScroll({
        cursorwidth: '14px',
        cursorcolor: '#e2f5ff'
    });
    //右侧滚动条优化
    $('.msg-item-container').niceScroll({
        cursorwidth: '14px',
        cursorcolor: '#e2f5ff'
    });

    
    $('.search-input').placeholder();
})