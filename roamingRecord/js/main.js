/**
 * 自定义js，插件初始化，插件操作
 * 邹贵初
 * T00005162@vipshop.com
 */

jQuery(function ($) {
    //左侧dom 右侧dom 右侧内部dom
    var leftdom = $('#js-userlist');
    var rightdom = $('.msg-item-container');
    var rightinsidedom = $('#js-itemlist');
    //左侧计算区dom 右侧计算区dom 返回按钮dom
    var leftcountdom = $('.aside-datacontainer');
    var rightcountdom = $('.msg-item-datacontainer');
    var backbtn = $('#js-backbtn');
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
    var $select2Person = $('#js-select2-person'),
        $select2Date = $('#js-select2-date'),
        $pageMask = $('#js-page-mask'),
        $customSaerch = $('#js-custom-saerch');

    $select2Person.select2({
        width: '180px'
    })

    $select2Date.select2({
        minimumResultsForSearch: Infinity,
        width: '180px'
    })

    $select2Date.on("select2:closing", function (e) {
        if (e.currentTarget.value === 'costom') {
            showMask();
        }
    });

    $select2Date.on("select2:select", function (e) {
        if (e.currentTarget.value === 'costom') {
            showMask();
            (function (dom) {
                dom.on('click', function () {
                    showMask();
                })
            })($('#select2-js-select2-results').find('li:last'));
        }
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

    /**
     * 发送搜索请求
     * @param {string 搜索关键字} data 
     */
    var sendajax = function (data) {
        // alert('发送查询');
        //搜索结果调整dom
        leftcountdom.removeClass('ds-n');
        rightcountdom.removeClass('ds-n');
        backbtn.addClass('ds-n');
        initHeight(110, 160, 70, data);
        //可能有-----ajax------
    }
    /**
     * 搜索事件
     * @param {string 触发事件的dom input或放大镜图} dom 
     * @param {string 事件类型 回车或点击放大镜图} evt 
     */
    var searchEvt = function (dom, evt) {
        var data = '';
        if (evt === 'keydown') {
            dom.on(evt, function (e) {
                data = $('#js-searchinput').val();
                if (e.keyCode === 13) {
                    sendajax(data);
                }
            })
        } else {
            dom.on(evt, function () {
                data = $('#js-searchinput').val();
                sendajax(data);
            })
        }

    }
    /**
     * 初始化数据
     * @param {string 异步url} url 
     * @param {string 模板引擎script dom} tpldom 
     * @param {string 模板引擎dom} container 
     * @param {string 搜索的关键字} hasmsearchdata 
     */
    var initData = function (url, tpldom, container, hasmsearchdata) {
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
                //左侧
                if (container === '#js-userlist') {
                    $(container).find('li').eq(0).addClass('msgactive');
                    $(container).find('li').each(function (idx, el) {
                        idx = idx + 1;
                        $(el).on('click', function () {
                            $(this).addClass('msgactive').siblings().removeClass('msgactive');
                            initData('./json/history0' + idx + '.json', '#tpl-itemlist', '#js-itemlist');
                        })
                    })
                    //左侧总条数
                    $('#js-ulist-count').text(data.object.length);
                }
                //右侧
                if (container === '#js-itemlist') {
                    // $(container).find('.msg-item').eq(0).addClass('itemactive');
                    $(container).find('.msg-item').each(function (idx, el) {
                        idx = idx + 1;
                        if (hasmsearchdata) {
                            //右侧item鼠标移上背景与查看前后记录显示
                            $(el).on('mouseover', function () {
                                $(this).addClass('itemactive').siblings().removeClass('itemactive');
                                $(this).find('.css-seehistory').removeClass('ds-n');
                                $(this).siblings().find('.css-seehistory').addClass('ds-n');
                                //查看前后记录事件
                                $(this).find('.css-seehistory').on('click', function () {
                                    backbtn.removeClass('ds-n');
                                    rightcountdom.addClass('ds-n');
                                    //可能有-----ajax-----
                                    //返回按钮事件
                                    backbtn.on('click', function () {
                                        backbtn.addClass('ds-n');
                                        rightcountdom.removeClass('ds-n');
                                        //可能有-----ajax------
                                    })
                                })
                            })
                            //搜索结果高亮
                            $('.wrapper').unhighlight();
                            $('.wrapper').highlight(hasmsearchdata);
                            //右侧关键字
                            $('#js-item-keyword').text(hasmsearchdata);
                        }
                    })
                }
                //右侧总条数
                $('#js-itemlist-count').text(data.object.length);
                //关键字
                // $('#js-itemlist-count').text(data.object.length);
            },
            error: function (req) {
                // swal('网络不给力，请检查网络后刷新重试');
                swal('暂时只有前两个数据');
            }
        })

    }
    /**
     * 初始化容器高度 重新计算容器高度
     * @param {num 左侧容器减去高度} left 
     * @param {num 右侧容器减去高度} right 
     * @param {num 左右侧变动的margin-top} marginT 
     * @param {string 搜索关键字} searchdata 
     */
    var initHeight = function (left, right, marginT, searchdata) {
        //是否搜索
        if (searchdata) {
            //搜索后重新渲染dom
            initData('./json/userlist.json', '#tpl-userlist', '#js-userlist', searchdata);
            initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist', searchdata);
        } else {
            // 执行初始化数据
            initData('./json/userlist.json', '#tpl-userlist', '#js-userlist');
            initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist');
        }


        //wrap高度
        var wrapheight = $('#js-tohighlight').height();
        if (marginT) {
            leftdom.css('margin-top', marginT);
            rightdom.css('margin-top', marginT);
        }
        //左侧高度计算 wrapper高度减上下外边
        leftdom.height(wrapheight - left);
        //右侧高度计算 wrapper高度减上下外边
        rightdom.height(wrapheight - right);

        //窗口变化事件
        $(window).resize(function () {
            //左侧
            leftdom.height(wrapheight - left);
            //右侧
            rightdom.height(wrapheight - right);
        })
        //左侧滚动条优化
        leftdom.niceScroll({
            cursorwidth: '12px',
            cursorcolor: '#e2f5ff'
        });
        //右侧滚动条优化
        rightdom.niceScroll({
            cursorwidth: '12px',
            cursorcolor: '#e2f5ff'
        });
    }

    //执行时间选择处理函数
    pickTime();
    //搜索事件
    searchEvt($('#js-searchbtn'), 'click');
    searchEvt($('#js-searchinput'), 'keydown');
    //初始化数据 左右容器高度
    initHeight(70, 120);
})