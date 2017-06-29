angular.module('starter.controllers', [])


// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 

Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// 格式化秒数到时间格式
//例子：
//Number(90).FormatTime() //00:01:30秒
Number.prototype.FormatTime = function () {

    // 计算
    var hour = parseInt(this / 3600);
    var other = this % 3600;
    var minute = parseInt(other / 60);
    var second = other % 60;

    // 补零
    var zero = function (v) {
        return (v >> 0) < 10 ? "0" + v : v;
    };
    return [zero(hour), zero(minute), zero(second)].join(":");
};




var postMultipart = function (url, data) {
    var fd = new FormData();
    angular.forEach(data, function (val, key) {
        fd.append(key, val);
    });
    var args = {
        method: 'POST',
        url: url,
        data: fd,
        headers: {
            'Content-Type': undefined
        },
        transformRequest: angular.identity
    };
    return $http(args);
}


//判断一级部门是否物流
var isLogisticsDept = function (deptFullName) {
    var isLogistics = false;
    for (var i = 0; i < logisticsDept.length; i++) {
        if (logisticsDept[i] != "") {
            if (deptFullName.indexOf(logisticsDept[i]) >= 0) {
                return true;
            }
        }
    }
    return isLogistics;
}


//判断是否在手机浏览 
var isMobile = function () {
    var pda_user_agent_list = new Array("2.0 MMP", "240320", "AvantGo", "BlackBerry", "Blazer",
		"Cellphone", "Danger", "DoCoMo", "Elaine/3.0", "EudoraWeb", "hiptop", "IEMobile", "KYOCERA/WX310K", "LG/U990",
		"MIDP-2.0", "MMEF20", "MOT-V", "NetFront", "Newt", "Nintendo Wii", "Nitro", "Nokia",
		"Opera Mini", "Opera Mobi",
		"Palm", "Playstation Portable", "portalmmm", "Proxinet", "ProxiNet",
		"SHARP-TQ-GX10", "Small", "SonyEricsson", "Symbian OS", "SymbianOS", "TS21i-10", "UP.Browser", "UP.Link",
		"Windows CE", "WinWAP", "Androi", "iPhone", "iPod", "iPad", "Windows Phone", "HTC");
    var pda_app_name_list = new Array("Microsoft Pocket Internet Explorer");

    var user_agent = navigator.userAgent.toString();
    for (var i = 0; i < pda_user_agent_list.length; i++) {
        if (user_agent.indexOf(pda_user_agent_list[i]) >= 0) {
            return true;
        }
    }
    var appName = navigator.appName.toString();
    for (var i = 0; i < pda_app_name_list.length; i++) {
        if (user_agent.indexOf(pda_app_name_list[i]) >= 0) {
            return true;
        }
    }
    return false;
}

// 页面跳转
var loginout = function () {
    if (!isMobile()) {
        window.location.href = logoutUrl.PC_logOutUrl;
    } else {
        self.location = logoutUrl.Mobile_logOutUrl;
    }
}

var IsNewVersion = function () {
    var isok = false;
    var cookieStr = document.cookie;
    if (cookieStr.indexOf("appVersion") >= 0) {
        isok = true;
        console.log(cookieStr);
    }
    return isok;
}