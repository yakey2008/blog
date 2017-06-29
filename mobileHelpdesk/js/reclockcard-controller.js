angular.module('reclockcard.controller', [])

.controller('ReclockCardCtrl', ["$scope", "$ionicPopup", "$http", "$rootScope", "$ionicActionSheet", "$timeout", "$ionicScrollDelegate", "$ionicLoading", "$sce", "$q", "$anchorScroll", "$location", "ngDialog", "backend", "StrUtil",
    function ($scope, $ionicPopup, $http, $rootScope, $ionicActionSheet, $timeout, $ionicScrollDelegate, $ionicLoading, $sce, $q, $anchorScroll, $location, ngDialog, backend, StrUtil) {

        $scope.loading = function () {
            $ionicLoading.show({
                template: 'Loading...'
            });
        };
        $scope.overLoading = function () {
            $ionicLoading.hide();
        };
        $scope.goto = function (id) {
            $location.hash(id);
            $anchorScroll();
        }
        $scope.alert = function (title, message) {
            var alertPopup = $ionicPopup.alert({
                title: title,
                template: message
            });
            return alertPopup;
        }

        //当前用户信息
        $scope.userInfo = [];
        backend.getBackendInfo().then(function (data) {
            console.log(data);
            if (data != null) {
                $scope.userInfo = data.CurrentUser;
            }
            else {
                // 查询不到 用户信息
                loginout();
            }
        }, function (data) {
            // 加载后台信息出错
            loginout();
        });


        $scope.show = function (controlId) {

            var hideSheet = $ionicActionSheet.show({
                buttons: [
                  { text: '忘记打卡', value: '主观原因' },
                  { text: '未带考勤卡', value: '主观原因' },
                   { text: '考勤卡丢失', value: '主观原因' },
                    { text: '考勤卡失灵', value: '客观原因' },
                     { text: '考勤机故障', value: '客观原因' },
                      { text: '其他主观原因', value: '主观原因' }
                ],
                //destructiveText: 'Delete',
                titleText: '请选择补卡原因',
                cancelText: '取消',
                cancel: function () {
                    // add cancel code..
                },
                buttonClicked: function (index, item) {
                    var indexItem = controlId.substr(controlId.length - 1, 1);
                    console.log("当前选中补卡原因：" + controlId + " = " + item.value + " - " + item.text);
                    $scope.reclockCardContents[indexItem].reason = item.text;
                    $scope.reclockCardContents[indexItem].type = item.value;
                    console.log($scope.reclockCardContents);
                    return true;
                }
            });

        };

        //补卡原因
        $scope.reason = [
            {
                "type": "-1",
                "reason": "请选择..."
            },
           {
               "type": "主观原因",
               "reason": "忘记打卡"
           }, {
               "type": "主观原因",
               "reason": "未带考勤卡"
           }, {
               "type": "主观原因",
               "reason": "考勤卡丢失"
           }, {
               "type": "客观原因",
               "reason": "考勤卡失灵"
           }, {
               "type": "客观原因",
               "reason": "考勤机故障"
           }, {
               "type": "主观原因",
               "reason": "其他主观原因"
           }
        ];


        $scope.currentSelected = $scope.reason[0];


        $scope.change = function (controlId, currentSelected) {
            var index = controlId.substr(controlId.length - 1, 1);
            console.log("当前选中补卡原因：" + controlId + " = " + currentSelected.type + " - " + currentSelected.reason);
            $scope.reclockCardContents[index].reason = currentSelected.reason;
            $scope.reclockCardContents[index].type = currentSelected.type;
            console.log($scope.reclockCardContents);
        }

        //提交表单
        $scope.startReclockCardFlow = function () {
            $scope.loading();
            var reasonDetails = [];
            for (var i = 0; i < $scope.reclockCardContents.length; i++) {
                if ($scope.reclockCardContents[i].type == "-1" || $scope.reclockCardContents[i].type == "") {
                    $scope.overLoading();
                    $ionicPopup.alert({
                        title: "提示",
                        template: "当前第 " + (i + 1) + " 条补卡原因未填写，请填写完整"
                    });
                    return;
                }

                if (StrUtil.getStrByteLength($scope.reclockCardContents[i].comment) > 40) {
                    $scope.overLoading();
                    $ionicPopup.alert({
                        title: "提示",
                        template: "当前第 " + (i + 1) + " 条补卡备注说明内容长度不得超过20字"
                    });
                    return;
                }

                var reasonItem = {
                    "EmployeeId": $scope.userInfo.Id,
                    "Name": $scope.userInfo.Name,
                    "EmployeeNumber": $scope.userInfo.Code,
                    "Date": $scope.reclockCardContents[i].startDatePart.inputDate.Format("yyyy-MM-dd"),
                    "Time": $scope.reclockCardContents[i].startTimePart.inputEpochTime.FormatTime(),
                    "Type": $scope.reclockCardContents[i].type,
                    "Reason": $scope.reclockCardContents[i].reason,
                    "Comment": $scope.reclockCardContents[i].comment,
                };
                reasonDetails.push(reasonItem);
            };

            var reclockCardlowData = {
                "ReclockCardData": reasonDetails
            }

            $http.post(SiteConfigs.SubSite + 'ReclockCard/StartReclockCardFlow', {
                postFlowData: reclockCardlowData
            })
            .success(function (data) {
                $scope.overLoading();
                if (data.Result.Code == 1 && data.Result.Description == "成功") {

                    var uploadfiles = document.getElementsByName('uploadFile');
                    //将上传的附件绑定到流程
                    angular.forEach(uploadfiles, function (fileSpan) {
                        var fileData = fileSpan.innerHTML; //Guid|文件名称
                        console.log(fileData);
                        $http.post(SiteConfigs.SubSite + 'ReclockCard/UploadAttachment', {
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
                        $scope.overLoading();
                        console.log(data);
                    });
        }

        //时间控件集合
        $scope.reclockCardContents = [];

        //加班明细当前最大索引
        $scope.rcMaxIndex = 0;

        //初始化时间控件
        initReclockCardContent($scope);

        //添加补卡明细
        $scope.addReclockCardContent = function () {
            console.log("当前补卡原因项目数：" + $scope.reclockCardContents.length);
            initReclockCardContent($scope);
            var timer = $timeout(function () {
                $ionicScrollDelegate.resize();
                $scope.goto("btnSubmit");
                $timeout.cancel(timer);
            }, 100);
        }

        ///删除补卡明细
        $scope.delReclockCardContent = function (divIndex) {
            //删除div元素
            var removeObj = document.getElementById('div' + divIndex);
            if (removeObj != null)
                removeObj.parentNode.removeChild(removeObj);
            //删除数组对象
            for (var i = 0; i < $scope.reclockCardContents.length; i++) {
                if ($scope.reclockCardContents[i].divIndex == divIndex) {
                    $scope.reclockCardContents.splice(i, 1);
                    break;
                }
            }
            var timer = $timeout(function () {
                $ionicScrollDelegate.resize();
                $scope.goto("btnSubmit");
                $timeout.cancel(timer);
            }, 100);
        }
    }])
;




//初始化补卡明细
var initReclockCardContent = function ($scope) {
    var index = $scope.reclockCardContents.length;
    if (index < 5) {

        var disabledDates = [
			new Date()
        ];
        var monthList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
        $scope.datepickerObject = {};
        $scope.datepickerObject.inputDate = new Date();
        var now = new Date();

        var begindate = {
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
            from: new Date(2015, 1, 1), //Optional
            to: new Date(2026, 1, 1), //Optional
            callback: function (val) { //Optional

                if (typeof (val) === 'undefined') {
                    console.log('No date selected');
                } else {
                    $scope.reclockCardContents[index].startDatePart.inputDate = val;
                    console.log('日期 选择为 : ', val.Format("yyyy-MM-dd"));
                }
            },
            dateFormat: 'yyyy-MM-dd' //Optional
        };

        var begintime = {
            inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional
            step: 10, //Optional
            format: 24, //Optional
            titleLabel: '请选择开始时间', //Optional
            closeLabel: '取消', //Optional
            setLabel: '选择', //Optional
            setButtonType: 'button-vipshop', //Optional
            closeButtonType: 'button-stable', //Optional
            callback: function (val) { //Mandatory
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    $scope.reclockCardContents[index].startTimePart.inputEpochTime = val;
                    console.log(val.FormatTime());
                }
            }
        };

        var obj = {
            divIndex: $scope.rcMaxIndex,
            startDatePart: begindate,
            startTimePart: begintime,

            reasonId: "selectReason" + (index),
            remarkId: "txtremark" + (index),
            type: "",
            reason: "",
            comment: ""
        };
        $scope.reclockCardContents.push(obj);
        $scope.rcMaxIndex = $scope.rcMaxIndex + 1;

    }
}