angular.module('leave.controller', [])
	.controller('LeaveCtrl', ["$scope", "$ionicPopup", "$http", "$rootScope", "$timeout", "$ionicLoading", "$ionicScrollDelegate", "$sce", "$q", "ngDialog", "backend",
        function ($scope, $ionicPopup, $http, $rootScope, $timeout, $ionicLoading, $ionicScrollDelegate, $sce, $q, ngDialog, backend) {

            //用来指定依赖列表并且避免压缩问题
            //$inject = ['$scope', '$http', '$ionicPopup', '$rootScope', '$timeout', '$ionicLoading', '$sce', 'ngDialog', 'backend'];

            //获取 假期 合计
            $scope.isShowMessage = false;
            $scope.leaveTips = "";

            $scope.isShowparentsMeeting = false;
            $scope.parentsMeeting = "";


            $scope.tips = {
                title: "请假",
                content: $sce.trustAsHtml("1、根据《唯品会假期管理制度V2.0》规定，员工当年需休完年假，再休事假。</br></br>2、申请假期总时数是根据考勤系统排班信息自动计算，若发现申请时数为0时，可联系考勤员看是否有再考勤系统进行排班操作。 </br></br>3、如有问题，可联系helpdesk (020-22330012)"),
                returnpage: "leave"
            };

            var now = new Date();

            var disabledDates = [
                now
            ];
            var monthList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
            $scope.datepickerObject = {};
            $scope.datepickerObject.inputDate = now;


            $scope.datepickerObjectModalBegin = {
                todayLabel: '今天', //Optional
                closeLabel: '关闭', //Optional
                setLabel: '选择', //Optional
                setButtonType: 'button-vipshop', //Optional
                todayButtonType: 'button-vipshop', //Optional
                closeButtonType: 'button-vipshop', //Optional
                modalHeaderColor: 'bar-vipshop', //Optional
                modalFooterColor: 'bar-vipshop', //Optional
                templateType: 'modal', //Optional
                inputDate: $scope.datepickerObject.inputDate, //Optional
                mondayFirst: true, //Optional
                disabledDates: disabledDates, //Optional
                monthList: monthList, //Optional
                from: new Date(now.getFullYear(), now.getMonth() - 1, 1), //Optional
                to: new Date(now.getFullYear() + 1, 12, 31), //Optional
                callback: function (val) { //Optional
                    datePickerCallbackModalBegin(val);
                },
                dateFormat: 'yyyy-MM-dd' //Optional
            };


            $scope.datepickerObjectModalEnd = {
                todayLabel: '今天', //Optional
                closeLabel: '关闭', //Optional
                setLabel: '选择', //Optional
                setButtonType: 'button-vipshop', //Optional
                todayButtonType: 'button-vipshop', //Optional
                closeButtonType: 'button-vipshop', //Optional
                modalHeaderColor: 'bar-vipshop', //Optional
                modalFooterColor: 'bar-vipshop', //Optional
                templateType: 'modal', //Optional
                inputDate: $scope.datepickerObject.inputDate, //Optional
                mondayFirst: true, //Optional
                disabledDates: disabledDates, //Optional
                monthList: monthList, //Optional
                from: new Date(now.getFullYear(), now.getMonth() - 1, 1), //Optional
                to: new Date(now.getFullYear() + 1, 12, 31), //Optional
                callback: function (val) { //Optional
                    datePickerCallbackModalEnd(val);
                },
                dateFormat: 'yyyy-MM-dd' //Optional
            };


            $scope.datepickerObjectModalMarryDate = {
                todayLabel: '今天', //Optional
                closeLabel: '关闭', //Optional
                setLabel: '选择', //Optional
                setButtonType: 'button-vipshop', //Optional
                todayButtonType: 'button-vipshop', //Optional
                closeButtonType: 'button-vipshop', //Optional
                modalHeaderColor: 'bar-vipshop', //Optional
                modalFooterColor: 'bar-vipshop', //Optional
                templateType: 'modal', //Optional
                inputDate: $scope.datepickerObject.inputDate, //Optional
                mondayFirst: true, //Optional
                disabledDates: disabledDates, //Optional
                monthList: monthList, //Optional
                from: new Date(now.getFullYear() - 1, 1, 1), //Optional
                to: new Date(now.getFullYear() + 1, 12, 31), //Optional
                callback: function (val) { //Optional
                    datePickerCallbackModalMarryDate(val);
                },
                dateFormat: 'yyyy-MM-dd' //Optional
            };

            var datePickerCallbackModalBegin = function (val) {
                if (typeof (val) === 'undefined') {
                    console.log('No date selected');
                } else {
                    $scope.datepickerObjectModalEnd.from = val;
                    $scope.datepickerObjectModalBegin.inputDate = val;
                    $scope.formData.StartDatePart = val.Format("yyyy-MM-dd");
                    $scope.GetTotalTimes(null);

                    console.log('开始日期 选择为 : ', val.Format("yyyy-MM-dd"));
                }
            };

            var datePickerCallbackModalEnd = function (val) {
                if (typeof (val) === 'undefined') {
                    console.log('No date selected');
                } else {
                    $scope.datepickerObjectModalBegin.to = val;
                    $scope.datepickerObjectModalEnd.inputDate = val;
                    $scope.formData.EndDatePart = val.Format("yyyy-MM-dd");
                    $scope.GetTotalTimes(null);

                    console.log('结束日期 选择为 : ', val.Format("yyyy-MM-dd"));
                }
            };

            var datePickerCallbackModalMarryDate = function (val) {
                if (typeof (val) === 'undefined') {
                    console.log('No date selected');
                } else {
                    $scope.datepickerObjectModalMarryDate.inputDate = val;
                    $scope.formData.MarriageTime = val.Format("yyyy-MM-dd");

                    console.log('结婚日期 选择为 : ', val.Format("yyyy-MM-dd"));
                }
            };

            $scope.timePickerObject24HourBegin = {
                inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional
                step: 10, //Optional
                format: 24, //Optional
                titleLabel: '请选择开始时间', //Optional
                closeLabel: '取消', //Optional
                setLabel: '选择', //Optional
                setButtonType: 'button-vipshop', //Optional
                closeButtonType: 'button-stable', //Optional
                callback: function (val) { //Mandatory
                    timePicker24CallbackBegin(val);
                }
            };

            $scope.timePickerObject24HourEnd = {
                inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional   //+ (new Date()).getMinutes() * 60  详细值到秒
                step: 10, //Optional
                format: 24, //Optional
                titleLabel: '请选择结束时间', //Optional
                closeLabel: '取消', //Optional
                setLabel: '选择', //Optional
                setButtonType: 'button-vipshop', //Optional
                closeButtonType: 'button-stable', //Optional
                callback: function (val) { //Mandatory
                    timePicker24CallbackEnd(val);
                }
            };

            function timePicker24CallbackBegin(val) {
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    $scope.timePickerObject24HourBegin.inputEpochTime = val;
                    var selectedTime = new Date(val * 1000);
                    $scope.formData.StartTimePart = val.FormatTime();
                    $scope.GetTotalTimes();
                    console.log('Selected epoch is : ', val.FormatTime(), 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
                }
            };

            function timePicker24CallbackEnd(val) {
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    $scope.timePickerObject24HourEnd.inputEpochTime = val;
                    var selectedTime = new Date(val * 1000);
                    $scope.formData.EndTimePart = val.FormatTime();
                    $scope.GetTotalTimes();

                    console.log('Selected epoch is : ', val.FormatTime(), 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
                }
            };


            $scope.dialogObj; //用户信息框

            //隐藏,显示 更多按钮
            $scope.isShowMore = false;
            $scope.isShowMaryDate = false;
            //假期按钮初始化
            $scope.leaveType = [{
                "menu": [{
                    "name": "年假",
                    "show": true,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }, {
                    "name": "补休假",
                    "show": true,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }, {
                    "name": "病假",
                    "show": true,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }, {
                    "name": "事假",
                    "show": true,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }, {
                    "name": "婚假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }]
            }, {
                "menu": [{
                    "name": "丧假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": false,
                    "type": ""
                }, {
                    "name": "哺乳假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "产检假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "陪产假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "节育假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }]
            }, {
                "menu": [{
                    "name": "流产假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "工伤假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "家长会假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "1"
                }, {
                    "name": "产假",
                    "show": false,
                    "btnStyle": "button-plain",
                    "isUploadFile": true,
                    "type": "2"
                }, {
                    "name": "",
                    "show": false,
                    "btnStyle": "button-noboard",
                    "disabled": true
                }]
            }];


            $scope.alert = function (title, message) {
                return $ionicPopup.alert({
                    title: title,
                    template: message
                });
            }

            $scope.loading = function () {
                $ionicLoading.show({
                    template: 'Loading...'
                });
            };
            $scope.stoploading = function () {
                $ionicLoading.hide();
            };

            //获取 当前用户信息
            $scope.currentUser = [];
            backend.getBackendInfo().then(function (data) {
                console.log(data);
                //data.CurrentUser.Department = "全国物流中心";
                $scope.currentUser = data.CurrentUser;

                if (data != null) {
                    //if (data.CurrentUser.Department.indexOf("全国物流中心") > 0) {
                    if (isLogisticsDept(data.CurrentUser.Department)) {
                        var alertPopup = $scope.alert('提示', '非常抱歉，此流程暂时只提供非物流使用');
                        alertPopup.then(function (res) {
                            self.location = "vipoa://close"
                        });
                    }

                    $scope.formData.StaffCode = data.CurrentUser.Code;
                    var empTypeName = data.CurrentUser.EmployeeType;
                    var positionName = data.CurrentUser.Position;
                    if ((positionName.indexOf("实习生") === 0 || empTypeName.indexOf("003") === 0)) {
                        $scope.isShowMore = true;
                        for (var i = 0; i < $scope.leaveType.length; i++) {
                            for (var j = 0; j < $scope.leaveType[i].menu.length; j++) {
                                if ($scope.leaveType[i].menu[j].name == "事假" || $scope.leaveType[i].menu[j].name == "补休假") {
                                    $scope.leaveType[i].menu[j].show = true;
                                } else {
                                    $scope.leaveType[i].menu[j].show = false;
                                }
                            }
                        }
                    }
                } else {
                    // 查询不到 用户信息
                    loginout();
                }

            }, function (data) {
                $scope.alert("提示", '登录超时，请重新登录');
                loginout();
            });




            // 初始化页面表单数据
            $scope.formData = {
                "StaffCode": "",
                "LeaveReason": "",
                "LeaveType": "",
                "LeaverPosition": "",
                "JoinDate": $scope.currentUser.Code,
                "MarriageTime": $scope.datepickerObjectModalMarryDate.inputDate.Format("yyyy-MM-dd"),
                "StartDatePart": $scope.datepickerObjectModalBegin.inputDate.Format("yyyy-MM-dd"),
                "StartTimePart": $scope.timePickerObject24HourBegin.inputEpochTime.FormatTime(),
                "EndDatePart": $scope.datepickerObjectModalEnd.inputDate.Format("yyyy-MM-dd"),
                "EndTimePart": $scope.timePickerObject24HourEnd.inputEpochTime.FormatTime(),

                "TotalDays": "0",
                "TotalHours": "0",
                "TotalNDays": "",
                "TotalNHours": "",

                "Agent1Number": "",
                "Agent1Name": "",
                "Agent1Contact": "",
                "Agent1WorkContent": "",

                "Agent2Number": "",
                "Agent2Name": "",
                "Agent2Contact": "",
                "Agent2WorkContent": "",

                "Agent3Number": "",
                "Agent3Name": "",
                "Agent3Contact": "",
                "Agent3WorkContent": "",
                "IsNeedUploadFile": false,  //是否需要上传附件
                "errorMessage": ""   // 提示信息
            }


            $scope.settings = {
                enableFriends: true
            };

            //选择的用户信息
            $scope.userdata = {
                selectUser: ''
            };

            $scope.userinfo = null;



            // 关闭用户选择框 关闭窗体依赖 dialog.css样式
            $scope.closeUserInfo = function (item) {
                $scope.search.keyword = "";
                $scope.userinfo = null;
                var selectUser = $scope.userdata.selectUser;
                if (item != null && item != undefined && selectUser != null && selectUser != "") {
                    item.handOverName = selectUser.Name;
                    item.handUser = selectUser;
                    console.log("当前选中的交接人为 : " + selectUser.Name);
                }
                ngDialog.close($scope.dialogObj.id);
            }



            $scope.search = {
                keyword: ""
            };
            $scope.usermessage = "当前查询无结果";
            $scope.isShowNoPeople = false;
            // 弹出用户选择窗体
            $scope.openUserInfo = function (content) {
                $scope.userdata.selectUser = "";
                $scope.dialogObj = ngDialog.open({
                    template: 'templates/common/userinfo.html',
                    className: 'ngdialog-theme-plain',
                    animation: 'slide-in-up',
                    cache: false,
                    scope: $scope, //将scope传给userinfl.html
                    data: {
                        item: content
                    },
                    templateLoaded: function () {
                        //$scope.overLoading();
                    }
                });
            }

            $scope.GetAgentInfo = function (content) {
                if ($scope.search.keyword != null && $scope.search.keyword != "" && $scope.search.keyword.length > 1) {
                    $scope.loading();
                    $http.get(SiteConfigs.SubSite + 'Leave/GetAgentInfo', {
                        params: {
                            agentName: $scope.search.keyword
                        }
                    })
                        .success(function (data, status, headers, config) {
                            $scope.stoploading();
                            if (data != null && data != "" && data.length > 0) {
                                $scope.userinfo = data;
                                $scope.isShowNoPeople = false;
                            } else {
                                $scope.usermessage = "当前查询无结果";
                                $scope.isShowNoPeople = true;
                                $scope.userinfo = null;
                            }
                            console.log(data);
                        })
                        .error(function (data, status, headers, config) {
                            $scope.stoploading();
                            console.log(data);
                        });
                } else if ($scope.search.keyword.length == 1) {
                    $scope.isShowNoPeople = true;
                    $scope.userinfo = null;
                    $scope.usermessage = "查询员工（请至少输入两个字）";
                }
            }


            // 隐藏,显示 更多按钮
            $scope.showMore = function () {
                $scope.isShowMore = !$scope.isShowMore;
                $scope.leaveType[0].menu[4].show = true;
                for (var i = 1; i < $scope.leaveType.length; i++) {
                    for (var j = 0; j < $scope.leaveType[i].menu.length; j++) {
                        $scope.leaveType[i].menu[j].show = true;
                    }
                }
            }
            // 选择 请假类型
            $scope.selectLeaveType = function (item) {
                for (var i = 0; i < $scope.leaveType.length; i++) {
                    for (var j = 0; j < $scope.leaveType[i].menu.length; j++) {
                        if ($scope.leaveType[i].menu[j].btnStyle == "button-selected") {
                            $scope.leaveType[i].menu[j].btnStyle = "button-plain";
                            break;
                        }

                    }
                }
                if (item.name != "") {
                    item.btnStyle = "button-selected";
                }

                //判断当前假期是否需要上传文件
                if (item.isUploadFile == true) {
                    $scope.formData.IsNeedUploadFile = true;
                    if (item.type == "1") {  //如果是家长会假
                        $scope.formData.errorMessage = "请将校讯通短信或家长会开会通知（纸质）转为电子版文件后作为附件上传，谢谢！";
                    } else if (item.type == "2") {  // 如果是 婚假、产假、产检假、陪产假、哺乳假、节育假、流产假、工伤假
                        $scope.formData.errorMessage = "根据公司假期管理制度，申请【" + item.name + "】需提供合法、合规、完整的证明文件，请上传相关证明的电子版文件，原件备查，谢谢！";
                    }
                } else {
                    $scope.formData.IsNeedUploadFile = false;
                    $scope.formData.errorMessage = "";
                }

                if (item.name == "婚假") {
                    $scope.isShowMaryDate = true;
                } else {
                    $scope.isShowMaryDate = false;
                    $scope.formData.MarriageTime = "";
                }
                if (item.name == "家长会假") {
                    $scope.isShowparentsMeeting = true;
                    $scope.parentsMeeting = "温馨提示:根据《唯品会假期管理制度V2.0》规定，员工当年需休完年假，再休事假。家长会假最小为4小时，大于4小时计为1天";
                } else {
                    $scope.isShowparentsMeeting = false;
                }

                $scope.formData.LeaveType = item.name;
                console.log("当前选中假期類型 : " + item.name);
                $scope.GetTotalTimes();
            }

            //初始化 假期工作交接内容 (不超过三个)
            $scope.handOverContent = [];
            $scope.isShowAddOverBtn = true;

            //点击 更多交接事项 ，添加事项
            var timeout = null;
            $scope.addHandOverContent = function () {
                var index = $scope.handOverContent.length;
                if ($scope.handOverContent != null && index < 3) {
                    var obj = {
                        "handOverName": "",
                        "handOverContent": "",
                        "handUser": null,
                        "required": true
                    };
                    if (index >= 1 && index < 3) {
                        obj.required = false;
                    }
                    if (index == 2) {
                        $scope.isShowAddOverBtn = false;
                    }
                    $scope.handOverContent.push(obj);

                    $scope.$watch("search.keyword", function (newOverName) {
                        if (newOverName) {
                            if (timeout) {
                                $timeout.cancel(timeout);
                            }
                            timeout = $timeout(function () {
                                $scope.GetAgentInfo($scope.handOverContent[index]);
                            }, 300)
                        } else {
                            $scope.isShowNoPeople = false;
                        }

                    });
                }
                $timeout(function () {
                    $ionicScrollDelegate.resize();
                }, 100);
            }

            $scope.addHandOverContent();

            $scope.SetTotalNDays = function () {
                var t = [$scope.formData.StartDatePart + " " + $scope.formData.StartTimePart, $scope.formData.EndDatePart + " " + $scope.formData.EndTimePart];

                var days = 0,
                    hours = 0;
                if (t[0] !== '' && t[1] !== '') {
                    t = [ParseDate(t[0]), ParseDate(t[1])];
                    var diff = t[1] - t[0];
                    if (diff > 0) {
                        days = Math.floor(diff / (1000 * 60 * 60 * 24));
                        diff -= days * (1000 * 60 * 60 * 24);
                        hours = diff / (1000 * 60 * 60);
                        hours = (hours - Math.floor(hours) > 0.5 || hours == Math.floor(hours)) ? Math.ceil(hours) : (Math.floor(hours) + 0.5);

                    }
                }

                $scope.formData.TotalNDays = days;
                $scope.formData.TotalNHours = hours;
            }
            // 请假提交
            $scope.startWorkFlow = function (item) {

                $scope.loading();
                if ($scope.formData.LeaveType == "") {
                    $scope.stoploading();
                    $ionicPopup.alert({
                        title: "提示",
                        template: "请选择假期类型"
                    });
                    return;
                }

                if ($scope.formData.IsNeedUploadFile) {

                    var uploadfiles = document.getElementsByName('uploadFile');
                    var isExistsFile = false;
                    if (uploadfiles != null && uploadfiles.length != 0) {
                        isExistsFile = true;
                    }
                    if (!isExistsFile) {
                        $scope.stoploading();
                        $ionicPopup.alert({
                            title: "提示",
                            template: $scope.formData.errorMessage
                        });
                        return;
                    }
                }
                $scope.formData.LeaverPosition = $scope.currentUser.Position;
                $scope.formData.JoinDate = $scope.currentUser.Code;
                $scope.formData.Agent1Number = $scope.handOverContent[0].handUser.Code;
                $scope.formData.Agent1Name = $scope.handOverContent[0].handUser.Name;
                $scope.formData.Agent1Contact = $scope.handOverContent[0].handUser.Tel;
                $scope.formData.Agent1WorkContent = $scope.handOverContent[0].handOverContent;
                if ($scope.handOverContent[1] != null) {
                    $scope.formData.Agent2Number = $scope.handOverContent[1].handUser != null ? $scope.handOverContent[1].handUser.Code : "";
                    $scope.formData.Agent2Name = $scope.handOverContent[1].handUser != null ? $scope.handOverContent[1].handUser.Name : "";
                    $scope.formData.Agent2Contact = $scope.handOverContent[1].handUser != null ? $scope.handOverContent[1].handUser.Tel : "";
                    $scope.formData.Agent2WorkContent = $scope.handOverContent[1].handOverContent;
                }
                if ($scope.handOverContent[2] != null) {
                    $scope.formData.Agent3Number = $scope.handOverContent[2].handUser != null ? $scope.handOverContent[1].handUser.Code : "";
                    $scope.formData.Agent3Name = $scope.handOverContent[2].handUser != null ? $scope.handOverContent[1].handUser.Name : "";
                    $scope.formData.Agent3Contact = $scope.handOverContent[2].handUser != null ? $scope.handOverContent[1].handUser.Tel : "";
                    $scope.formData.Agent3WorkContent = $scope.handOverContent[2].handOverContent;
                }
 
                $scope.SetTotalNDays();

                $http.post(SiteConfigs.SubSite + 'Leave/StartLeaveWorkflow', {
                    leaveFlowData: $scope.formData
                })
                    .success(function (data) {
                        $scope.stoploading();
                        if (data.Result.Code == 1 && data.Result.Description == "成功") {

                            var uploadfiles = document.getElementsByName('uploadFile');
                            //将上传的附件绑定到流程
                            angular.forEach(uploadfiles, function (fileSpan) {
                                var fileData = fileSpan.innerHTML; //Guid|文件名称
                                console.log(fileData);
                                $http.post(SiteConfigs.SubSite + 'Leave/UploadAttachment', {
                                    taskId: data.Content,
                                    fileData: fileData
                                })
                                    .success(function (data, status, headers, config) { })
                                    .error(function (data, status, headers, config) { });
                            });

                            var alertPopup = $ionicPopup.alert({
                                title: '提示',
                                template: '提交成功'
                            });
                            alertPopup.then(function (res) {
                                console.log("确认提交成功");
                                self.location = "vipoa://close"
                            });

                        } else {
                            $ionicPopup.alert({
                                title: data.Result.Description,
                                template: data.Content
                            });
                            console.log(data.Content);
                        }
                        console.log(data);
                        return;
                    })
                    .error(function (data, status, headers, config) {
                        $scope.stoploading();
                        console.log(data);
                    });
            }


            $scope.GetTotalTimes = function (callback) {
                var startTime = $scope.formData.StartDatePart + " " + $scope.formData.StartTimePart;
                var endTime = $scope.formData.EndDatePart + " " + $scope.formData.EndTimePart;
                var StaffCode = $scope.formData.StaffCode;
                var LeaveType = $scope.formData.LeaveType;

                //string staffCode, string startTime, string endTime, string leaveType
                $http.get(SiteConfigs.SubSite + 'Leave/QueryWorkHour', {
                    params: {
                        staffCode: StaffCode,
                        startTime: startTime,
                        endTime: endTime,
                        leaveType: LeaveType
                    }
                })
                    .success(function (data, status, headers, config) {
                        if (data != null) {
                            var d = data;
                            if (d != "" && d != null && d.Msg != "") {
                                console.log(d.Msg);
                                //alert(d.Msg);
                                $scope.formData.TotalDays = "";
                                $scope.formData.TotalHours = "";
                            } else {
                                if (d == "") {
                                    $scope.formData.TotalDays = 0;
                                    $scope.formData.TotalHours = 0;
                                    return;
                                }
                                var ruleMsg = LeaveRuleCheck(LeaveType, d);
                                var dayAndHour = d.WorkTimeHours > d.CanLeaveHours ? FormatWorkHour(d.WorkTimeHours) : FormatWorkHour(d.CanLeaveHours);
                                $scope.formData.TotalDays = dayAndHour[0];
                                $scope.formData.TotalHours = dayAndHour[1];
                                if (ruleMsg != "") {
                                    $scope.leaveTips = ruleMsg;
                                    $scope.isShowMessage = true;
                                } else {
                                    $scope.isShowMessage = false;
                                }
                            }
                            if (callback != null && callback != undefined) {
                                callback();
                            }
                        }
                        console.log(data);
                    })
                    .error(function (data, status, headers, config) {
                        console.log(data);
                        $scope.formData.TotalDays = "";
                        $scope.formData.TotalHours = "";
                    });

            }

            function FormatWorkHour(hoursInFloat) {
                var floorHours = Math.floor(hoursInFloat);
                var f = hoursInFloat;
                if (hoursInFloat - floorHours === 0) {
                    f = floorHours;
                } else if ((hoursInFloat - floorHours) <= 0.5 &&
                    (hoursInFloat - floorHours) > 0) {
                    f = floorHours + 0.5;
                } else {
                    f = floorHours + 1;
                }
                var days = Math.floor(f / 8);
                var hours = f % 8;
                return [days, hours];
            }



            // 验证 假期 合计 
            var LeaveRuleCheck = function (leaveType, workTime) {

                var checkResultMsg = '';
                switch (leaveType) {
                    case '补休假':
                        if (workTime.WorkTimeHours > workTime.AdditionalVacationHours) {
                            checkResultMsg += '您的补休假余额不足，请调整假期时间。\r\n';
                        }
                        break;
                    case '年假':
                        if (workTime.WorkTimeHours > workTime.AnnualLeaveHours) {
                            checkResultMsg += '您的年假余额不足，请调整假期时间。\r\n';
                        }
                        break;
                    case '事假':
                        if (workTime.AnnualLeaveHours > 0 || workTime.AdditionalVacationHours > 0) {
                            checkResultMsg += '您的补休假/年假仍有余额，请先休完补休假/年假。\r\n';
                        }
                        break;
                }
                if (checkResultMsg != '') {
                    checkResultMsg += '您的补休假剩余' + workTime.AdditionalVacationHours + '小时，年假剩余' + workTime.AnnualLeaveHours + '小时。\r\n';
                }
                return checkResultMsg;
            }


            function ParseDate(input) {
                var format = 'yyyy-MM-dd HH:mm';
                var parts = input.match(/(\d+)/g);
                var i = 0,
                    fmt = {};
                format.replace(new RegExp(format.replace(/\/|\:|\-| /g, '|'), 'g'),
                    function (part) {
                        fmt[part] = i++;
                    }
                );
                return new Date(
                    (parts.length > fmt.yyyy) ? parts[fmt.yyyy] : 0, (parts.length > fmt.MM) ? parts[fmt.MM] - 1 : 0, (parts.length > fmt.dd) ? parts[fmt.dd] : 0, (parts.length > fmt.HH) ? parts[fmt.HH] : 0, (parts.length > fmt.mm) ? parts[fmt.mm] : 0
                );
            }

        }])


;