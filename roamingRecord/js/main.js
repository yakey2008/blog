/**
 * 自定义js，插件初始化，插件操作
 * 邹贵初
 * T00005162@vipshop.com
 */

jQuery(function ($) {
    //注册hb helper 
    //对比聊天记录人名
    Handlebars.registerHelper('isshowme', function (v1, v2, opts) {
        if (v1 === v2) {
            return opts.fn(this);
        } else {
            return opts.inverse(this);
        }
    })
    //人员列表日期格式化
    Handlebars.registerHelper('dateuser', function (time) {
        return moment(time).format('mm:ss');
    });
    //聊天记录日期格式化
    Handlebars.registerHelper('dateitem', function (time) {
        return moment(time).format('YYYY-MM-DD HH:mm:ss');
    });

    //左侧dom 右侧dom 右侧内部dom
    var leftdom = $('#js-userlist');
    $select2Date
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


    //搜索人员显示格式    
    function formatRepo(repo) {
        if (repo.loading) return '查找中...';
        var markup = repo.loginid + '<br/>(' + repo.name + ')'
        return markup;
    }
    //搜索人员搜索中显示
    function formatRepoSelection(repo) {
        return repo.name || repo.text;
    }
    //搜索人员
    $select2Person.select2({
        id: function (data) {
            return data.ID;
        },
        width: '180px',
        ajax: {
            url: "/api/User/GetUserList",
            dataType: 'json',
            delay: 250,
            data: function (params) {
                return {
                    keyword: params.term
                };
            },
            processResults: function (data, params) {
                var setdata = JSON.stringify(data.Object).toLowerCase();
                setdata = JSON.parse(setdata);
                return {
                    results: setdata
                };
            },
            cache: true
        },
        escapeMarkup: function (markup) {
            return markup;
        },
        minimumInputLength: 2,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection
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
        format: 'yyyy/mm/dd',
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
     * 验证搜索
     */
    var valsearch = function (dom, e) {
        if (dom.val() === '') {
            e.preventDefault();
            swal('搜索关键词不能为空');
            return false
        } else {
            sendajax();
        }
    }

    /**
     * 发送搜索请求 拼接搜索数据
     */
    var sendajax = function () {
        var data = {};
        data.keyword = $('#js-searchinput').val();
        data.startTime = '';
        data.endTime = '';
        var userval = $('#js-select2-person').val();
        if (userval !== -1) {
            data.userval = userval;
        }
        var selval = $('#js-select2-date').val();
        switch (selval) {
            case "0":
                data.startTime = getWeekStartDate();
                data.endTime = getWeekEndDate();
                break;
            case "1":
                data.startTime = getLastWeekStartDate();
                data.endTime = getLastWeekEndDate();
                break;
            case "2":
                data.startTime = getMonthStartDate();
                data.endTime = getMonthEndDate();
                break;
            case "3":
                data.startTime = getLastMonthStartDate();
                data.endTime = getLastMonthEndDate();
                break;
            case "costom":
                data.startTime = $('#js-start-time').val();
                data.endTime = $('#js-end-time').val();
                break;
            default:
                break;
        }

        //搜索结果调整dom
        leftcountdom.removeClass('ds-n');
        rightcountdom.removeClass('ds-n');
        backbtn.addClass('ds-n');
        initHeight(110, 160, 70, data);
    }

    /**
     * 搜索事件
     * @param {string} dom 触发事件的dom input或放大镜图
     * @param {string} evt 事件类型 回车或点击放大镜图
     */
    var searchEvt = function (dom, evt) {
        if (evt === 'keydown') {
            dom.on(evt, function (e) {
                if (e.keyCode === 13) {
                    valsearch($(this), e);
                }
            })
        } else {
            dom.on(evt, function (e) {
                valsearch($('#js-searchinput'), e);
            })
        }

    }

    /**
     * 搜索右侧列表
     * @param {object} data user 的数据传递
     * @param {string} tpldom 搜索后的tpl
     * @param {string} container 聊天记录显示容器
     * @param {string} hasmsearchdata 搜索的数据
     */
    var searhresultdata = function (data, tpldom, container, hasmsearchdata) {
        var tpl = $(tpldom).html();
        var data = data;
        var template = Handlebars.compile(tpl);
        var html = template(data);
        $(container).html(html);

        $(container).find('.msg-search-item').each(function (idx, el) {
            //右侧item鼠标移上背景与查看前后记录显示
            $(el).on('mouseover', function () {
                var _this = $(this);
                $(this).addClass('itemactive').siblings().removeClass('itemactive');
                $(this).find('.css-seehistory').removeClass('ds-n');
                $(this).siblings().find('.css-seehistory').addClass('ds-n');
                //查看前后记录事件
                $(this).find('.css-seehistory').off().on('click', function () {
                    backbtn.removeClass('ds-n');
                    rightcountdom.addClass('ds-n');
                    //查看当前数据前后
                    initData('/api/Manager/GetChatRecord?targetID=' + _this.data('targetid') + '&opType=1&locatorId=' + _this.data('locatorid'), '#tpl-itemlist-init', '#js-itemlist');
                })
            })
        })

        //返回按钮事件
        backbtn.off().on('click', function () {
            backbtn.addClass('ds-n');
            rightcountdom.removeClass('ds-n');
            //返回搜索结果列表
            sendajax();
        })
        //搜索结果高亮
        $('.wrapper').unhighlight();
        $('.wrapper').highlight(hasmsearchdata.keyword);
        //右侧关键字
        $('#js-item-keyword').text(hasmsearchdata.keyword);
        //右侧总条数
        $('#js-itemlist-count').text(data.Details.length);
    }

    /**
     * 显示有结果页面
     * @param {string} type  search来自搜索 init 来自初始化数据
     */
    var showresult = function (type) {
        if (type === 'search') {
            $('.aside-datacontainer').removeClass('ds-n');
        }
        $('.css-noresult').addClass('ds-n');
        $('.css-hasresult').removeClass('ds-n');
    }

    //显示无结果页面
    var hideresult = function () {
        $('.css-noresult').removeClass('ds-n');
        $('.css-hasresult').addClass('ds-n');
        $('.aside-datacontainer').addClass('ds-n');
    }

    /**
     * 初始化数据 搜索数据
     * @param {string 异步url} url
     * @param {string 模板引擎script dom} tpldom 
     * @param {string 模板引擎dom} container 
     * @param {string 搜索的关键字} hasmsearchdata 
     */
    var initData = function (url, tpldom, container, hasmsearchdata) {
        //左侧
        $.ajax({
            url: url,
            type: 'get',
            dataType: "json",
            success: function (req) {
                if (req.ResponseHeader.Status === 1) {
                    if (hasmsearchdata) {
                        //搜索 start
                        //左侧搜索
                        if (container === '#js-userlist') {
                            var tpl = $(tpldom).html();
                            var data = req;
                            var template = Handlebars.compile(tpl);
                            var html = template(data);
                            $(container).html(html);
                            if (data.ChatSessionDatas.length > 0) {
                                showresult('search');
                                searhresultdata(data.ChatSessionDatas[0], '#tpl-itemlist', '#js-itemlist', hasmsearchdata);
                                $(container).find('li').each(function (idx, el) {
                                    if (idx === 0) {
                                        $(el).addClass('msgactive');
                                    }
                                    $(el).on('click', function () {
                                        $(this).addClass('msgactive').siblings().removeClass('msgactive');
                                        // var data = eventdata(idx);
                                        searhresultdata(data.ChatSessionDatas[idx], '#tpl-itemlist', '#js-itemlist', hasmsearchdata);
                                        // initData('/api/Manager/GetChatRecord?targetID=' + data.ChatSessionDatas[idx].TargetInfo.TargetID + '&opType=1', '#tpl-itemlist-init', '#js-itemlist');
                                    })
                                })
                            } else {
                                hideresult();
                            }
                        }

                    } else {
                        //初始化 start

                        if (container === '#js-userlist') {
                            var tpl = $(tpldom).html();
                            var data = req;
                            var template = Handlebars.compile(tpl);
                            var html = template(data);
                            $(container).html(html);

                            $(container).find('li').eq(0).addClass('msgactive');
                            //初始化右侧信息列表
                            initData('/api/Manager/GetChatRecord?targetID=' + data.ChatSessionDatas[0].TargetInfo.TargetID + '&opType=1', '#tpl-itemlist-init', '#js-itemlist');
                            // initData('/api/Manager/GetChatRecord?targetID='+data.targetInfoDatas[0].targetID+'&opType=1', '#tpl-itemlist', '#js-itemlist');

                            // initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist');

                            //左侧点击事件
                            $(container).find('li').each(function (idx, el) {
                                $(el).on('click', function () {
                                    if (data.ChatSessionDatas.length > 0) {
                                        showresult('init');
                                        $(this).addClass('msgactive').siblings().removeClass('msgactive');
                                        // var data = eventdata(idx);
                                        // initData(data, '#tpl-itemlist', '#js-itemlist');
                                        initData('/api/Manager/GetChatRecord?targetID=' + data.ChatSessionDatas[idx].TargetInfo.TargetID + '&opType=1', '#tpl-itemlist-init', '#js-itemlist');
                                    }

                                })
                            })

                            //左侧总条数
                            $('#js-ulist-count').text(data.ChatSessionDatas.length);

                        }

                        //右侧
                        if (container === '#js-itemlist') {
                            var tpl = $(tpldom).html();
                            var data = req;
                            data.userid = userid;
                            var template = Handlebars.compile(tpl);
                            var html = template(data);
                            $(container).html(html);
                            $('.pagenum').each(function (index, el) {
                                var tempindex = index + 1;
                                //分页事件
                                $(el).off().on('click', function () {
                                    if (data.ChatRecordDatas.length > 0) {
                                        var reqdata = false;
                                        switch (tempindex) {
                                            case 1:
                                                if (data.IsFirstPage) {
                                                    return false;
                                                } else {
                                                    reqdata = true;
                                                }
                                                break;
                                            case 2:
                                                if (data.IsFirstPage) {
                                                    return false;
                                                } else {
                                                    reqdata = true;
                                                }
                                                break;
                                            case 3:
                                                if (data.IsLastPage) {
                                                    return false;
                                                } else {
                                                    reqdata = true;
                                                }
                                                break;
                                            case 4:
                                                if (data.IsLastPage) {
                                                    return false;
                                                } else {
                                                    reqdata = true;
                                                }
                                            default:
                                                break;
                                        }

                                        if (reqdata) {
                                            initData('/api/Manager/GetChatRecord?targetID=' + data.ChatRecordDatas[0].TargetInfo.TargetID + '&opType=' + tempindex + '&locatorId=' + data.ChatRecordDatas[0].LocatorID, '#tpl-itemlist-init', '#js-itemlist');
                                        }
                                    }
                                })
                            })
                        }
                        //初始化 end
                    }
                } else {
                    hideresult();
                    swal('网络不给力，请检查网络后刷新重试');
                }
            },
            error: function (req) {
                hideresult();
                swal('网络不给力，请检查网络后刷新重试');
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
        var weekstart = getWeekStartDate();
        var weekend = getWeekEndDate();
        //是否搜索
        if (searchdata) {
            //搜索后重新渲染dom
            initData('/api/Manager/GetChatSession?startTime=' + searchdata.startTime + '&endTime=' + searchdata.endTime + '&keyword=' + searchdata.keyword, '#tpl-userlist', '#js-userlist', searchdata);
            // initData('./json/history01.json', '#tpl-itemlist', '#js-itemlist', searchdata);
        } else {
            // 执行初始化数据
            // initData('./json/userlist.json', '#tpl-userlist', '#js-userlist');
            initData('/api/Manager/GetChatSession?startTime=' + weekstart + '&endTime=' + weekend, '#tpl-userlist', '#js-userlist');
            // initData('/api/Manager/GetChatRecord?targetID=92a6a18b-3c9d-437c-9a26-5d38f0d062b6&opType=1&locatorId=asdasd', '#tpl-itemlist', '#js-itemlist');
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
    $.ajax({
        url: '/api/user/my',
        dataType: 'json',
        type: 'get',
        dataType: "json",
        success: function (req) {
            if (req.Success) {
                window.userid = req.Object.ID;
            }
        }
    })

    pickTime();
    //搜索事件
    searchEvt($('#js-searchbtn'), 'click');
    searchEvt($('#js-searchinput'), 'keydown');
    //初始化数据 左右容器高度
    initHeight(70, 120);
})