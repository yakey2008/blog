/**
 * 自定义js，插件初始化，插件操作
 * 邹贵初
 * T00005162@vipshop.com
 */

jQuery(function ($) {
    //mask摸态框显示隐藏
    var hideMask = function (method) {
        $pageMask.addClass('ds-n');
        $customSaerch.addClass('ds-n');
    }

    var showMask = function () {
        $pageMask.removeClass('ds-n');
        $customSaerch.removeClass('ds-n');
    }
    //初始化select2
    var $select2 = $('#js-select2'),
        $pageMask = $('#js-page-mask'),
        $customSaerch = $('#js-custom-saerch');


    $select2.select2({
        minimumResultsForSearch: Infinity,
        width: '180px'
    })

    $select2.on("select2:closing", function (e) {
        if (e.currentTarget.value === 'costom') {
            showMask();
        }
    });

    $select2.on("select2:select", function (e) {
        if (e.currentTarget.value === 'costom') {
            showMask();
            (function (dom) {
                dom.on('click', function () {
                    showMask();
                })
            })($('#select2-js-select2-results').find('li:last'));
        }
    });

    //wrapper高度减上下外边
    $('.msg-item-container').height($('.wrapper').height() - 120);
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
    //兼容ie placeholder
    $('.search-input').placeholder();


    //时间配置初始化
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        format: 'yyyy年mm月dd日',
        weekStart: 1,
        yearSuffix: '年',
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        daysShort: ['一', '二', '三', '四', '五', '六', '日'],
        daysMin: ['日', '一', '二', '三', '四', '五', '六'],
    });


    //时间选择处理 摸态框关闭 提交按钮事件
    var pickTime = function () {
        var jsStart = $('#js-start-time'),
            jsEnd = $('#js-end-time'),
            pickedTime = '';
        jsStart.on('pick.datepicker', function (e) {
            if (!pickedTime) {
                pickedTime = e.date;
            } else {
                if (e.date > pickedTime) {
                    swal('结束时间不可小于开始时间');
                    e.preventDefault();
                } else {
                    $(this).val(e.date)
                }
            }

        });
        jsEnd.on('pick.datepicker', function (e) {
            if (!pickedTime) {
                pickedTime = e.date;
            } else {
                if (e.date < pickedTime) {
                    swal('结束时间不可小于开始时间');
                    e.preventDefault();
                } else {
                    $(this).val(e.date)
                }
            }

        });
        $('#js-close-btn').on('click', function () {
            hideMask();
        })
        $('#js-picktimebtn').on('click', function () {
            hideMask();
        })
    }

    //搜索事件
    var sendajax = function (data) {
        alert('发送查询');
        //$.ajax({data})
    }
    var searchEvt = function (dom, evt) {
        var data = '';
        if (evt === 'keydown') {
            dom.on(evt, function (e) {
                data = $('#js-select2').val();
                if (e.keyCode === 13) {
                    sendajax(data);
                }
            })
        } else {
            dom.on(evt, function () {
                data = $('#js-select2').val();
                sendajax(data);
            })
        }
    }
    // 初始化数据
    var initPage = function (url, tpldom, container) {
        $.ajax({
            url: url,
            type: 'get',
            dataType: "json",
            success: function (req) {
                var tpl = $(tpldom).html();
                var data = req;
                var template = Handlebars.compile(tpl);
                var html = template(data);
                $(container).html(html);
                if (container === '#js-userlist') {
                    $(container).find('li').eq(0).addClass('msgactive');
                }
            },
            error: function (req) {
                swal('网络不给力，请检查网络后刷新重试');
            }
        })

    }

    //执行时间选择处理函数
    pickTime();
    //搜索事件
    searchEvt($('#js-searchbtn'), 'click');
    searchEvt($('#js-searchinput'), 'keydown');
    // 执行初始化数据
    initPage('./json/userlist.json', '#tpl-userlist', '#js-userlist');
    initPage('./json/history.json', '#tpl-itemlist', '#js-itemlist');
})