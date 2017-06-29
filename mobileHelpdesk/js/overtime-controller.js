
angular.module('overtime.controller', [])
.controller('OvertimeCtrl', ["$scope", "$ionicPopup", "$http", "$rootScope", "$timeout", "$ionicLoading", "$sce", "$q", "ngDialog", "backend",function ($scope, $ionicPopup, $http, $rootScope, $timeout, $ionicLoading, $sce, $q, ngDialog, backend) {
//  //用来指定依赖列表并且避免压缩问题
//  $inject = ['$scope', '$http', '$ionicPopup','$rootScope','$timeout','$ionicLoading','$sce','ngDialog','backend'];

    $scope.loading = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.overLoading = function () {
        $ionicLoading.hide();
    };

    $scope.alert = function (title, message) {
        var alertPopup=$ionicPopup.alert({
            title: title,
            template: message
        });
        return alertPopup;
    }

    $scope.settings = {
        enableFriends: true
    };


    $scope.tips = {
        title: " Tips",
        content: $sce.trustAsHtml("1、不能提交上一考勤周期的加班。</br></br>2、非00:00开始加班时长必须至少为1小时，且以0.5小时为单位递增。 </br></br>3、如有问题，可联系helpdesk (020-22330012)"),
        returnpage: "overtime"
    };

    //当前用户信息
    $scope.userInfo = [];
    backend.getBackendInfo().then(function (data) {
        console.log(data);
        if (data != null) {
            $scope.userInfo = data.CurrentUser;
            //$rootScope.jscssVerson = data.JSCSSVerson;
            //if ($scope.userInfo.Department.indexOf("全国物流中心") > 0) {
            if (isLogisticsDept($scope.userInfo.Department)) {
                var alertPopup = $scope.alert('提示', '非常抱歉，此流程暂时只提供非物流使用');
                alertPopup.then(function (res) {
                    self.location = "vipoa://close"
                });
            }
        }
        else {
            // 查询不到 用户信息
            loginout();
        }


    }, function (data) {
        // 加载后台信息出错
        loginout();
    });


    //假期按钮初始化
    $scope.btnStyle = "button-plain";
    $scope.overtimeType = [{
        "name": "休息日",
        "btnStyle": "button-plain",
        "selectValue": "1"
    }, {
        "name": "工作日",
        "btnStyle": "button-plain",
        "selectValue": "2"
    }, {
        "name": "法定假日",
        "btnStyle": "button-plain",
        "selectValue": "3"
    }];
    $scope.overtimeTypeSelected = "";


    $scope.selectOverTimeType = function (item) {
        for (var i = 0; i < $scope.overtimeType.length; i++) {
            if ($scope.overtimeType[i].btnStyle == "button-selected") {
                $scope.overtimeType[i].btnStyle = "button-plain";
                break;
            }
        }
        item.btnStyle = "button-selected";
        //alert("选中" + item.name + " : " + item.selectValue);
        $scope.overtimeTypeSelected = item.name;
    }



    //时间控件集合
    $scope.overTimeContents = [];
    //加班明细当前最大索引
    $scope.otMaxIndex = 0;
    //初始化时间控件
    initOverTimeContent($scope);

    $scope.addOverTimeContent = function () {
        console.log($scope.overTimeContents.length);
        initOverTimeContent($scope);
    }
    
    ///删除加班明细
    $scope.delOverTimeContent = function (divIndex) {
        //删除div元素
        var removeObj = document.getElementById('div' + divIndex);
        if (removeObj != null)
            removeObj.parentNode.removeChild(removeObj);

        //删除数组对象
        for (var i = 0; i < $scope.overTimeContents.length; i++) {
            if ($scope.overTimeContents[i].divIndex == divIndex) {
                $scope.overTimeContents.splice(i, 1);
                break;
            }
        }
    }

    $scope.startOTWorkflow = function (item) {
        /* @"<myField GUID='589032fb-1895-4aa6-b73f-98a824bfd8b1' sort='0' isdelete='0' isdefault='0' isedit='0'>
            //	<SerialNO/>
            //	<Applicant>张怡</Applicant>
            //	<ApplicationTime>2016/3/4 15:28:10</ApplicationTime>
            //	<StaffCode>2013042213337</StaffCode>
            //	<Position>（频道）主编</Position>
            //	<Dept>唯品会/汽车事业部</Dept>
            //	<OTer>张怡</OTer>
            //	<OTerStaffCode>2013042213337</OTerStaffCode>
            //	<WorkType>不定时</WorkType>
            //	<OTType>法定假日</OTType>
            //	<ApplicantId>49c853cf-5084-4742-ab0e-16f1521ee8e1</ApplicantId>
            //	<DeptId>29112a4e-41e8-4fb0-be38-6cffa7fbb7fb</DeptId>
            //	<OTerId>49c853cf-5084-4742-ab0e-16f1521ee8e1</OTerId>
            //	<EmployeeList type='retable'>
            //		<item GUID='3aa77cb6-1ed0-40b2-8b1b-77566d781f01' sort='1' isdelete='0' isdefault='0' isedit='0'>
            //			<EmployeeId/>
            //			<OTStartDateTime>2016-03-03 15:30</OTStartDateTime>
            //			<OTEndDateTime>2016-03-03 20:30</OTEndDateTime>
            //			<OTHours>4.5</OTHours>
            //			<OTReason>1</OTReason>
            //			<OTContent>1</OTContent>
            //			<OTAddress>1</OTAddress>
            //		</item>
            //	</EmployeeList>
            //</myField>*/

        //var overtimeFlowData = {
        //    "OTType": "法定假日",
        //    "EmployeeList": [{
        //        "item": {
        //            "StartDatePart": "2016-03-03",
        //            "StartTimePart": "15:30",
        //            "EndDatePart": "2016-03-03",
        //            "EndTimePart": "20:30",
        //            "OTHours": 5,
        //            "OTReason": "test OTReason",
        //            "OTContent": "test OTContent",
        //            "OTAddress": "广新"
        //        }
        //    }]
        //}

        $scope.loading();

        //数据验证
        if ($scope.overtimeTypeSelected == "") {
            $scope.alert('提示', '请选择加班时段');
            $scope.overLoading();
            return;
        }
        if ($scope.overTimeContents.length == "") {
            $scope.alert('提示', '请输入加班明细');
            $scope.overLoading();
            return;
        }

        var overTimeDetails = [];
        for (var i = 0; i < $scope.overTimeContents.length; i++) {

            var overTimeItem = {
                "StartDatePart": $scope.overTimeContents[i].startDatePart.inputDate.Format("yyyy-MM-dd"),
                "StartTimePart": $scope.overTimeContents[i].startTimePart.inputEpochTime.FormatTime(),
                "EndDatePart": $scope.overTimeContents[i].endDatePart.inputDate.Format("yyyy-MM-dd"),
                "EndTimePart": $scope.overTimeContents[i].endTimePart.inputEpochTime.FormatTime(),
                "OTHours": $scope.overTimeContents[i].otHours,
                "OTReason": $scope.overTimeContents[i].overTimeReason,
                "OTContent": $scope.overTimeContents[i].overTimeContent,
                "OTAddress": $scope.overTimeContents[i].overTimeAddress
            };
            overTimeDetails.push(overTimeItem);
        };
        var overtimeFlowData = {
            "OTType": $scope.overtimeTypeSelected,
            "EmployeeList": overTimeDetails
        }

        $http.post(SiteConfigs.SubSite + 'Overtime/StartOTWorkflow', { postFlowData: overtimeFlowData })
            .success(function (data, status, headers, config) {
                console.log(data);
                if (data.Result.Code == 1) {
                    //var f = document.getElementById('uploadFiles');
                    var uploadfiles = document.getElementsByName('uploadFile');
                    //将上传的附件绑定到流程
                    angular.forEach(uploadfiles, function (fileSpan) {
                        var fileData = fileSpan.innerHTML;  //Guid|文件名称
                        console.log(fileData);
                        $http.post(SiteConfigs.SubSite + 'Overtime/UploadAttachment', { taskId: data.Content, fileData: fileData })
                            .success(function (data, status, headers, config) { })
                            .error(function (data, status, headers, config) { });
                    });

                    $scope.overLoading();
                    var alertPopup = $scope.alert('提示', '提交成功');

                    //var alertPopup=$ionicPopup.alert({
                    //    title: '提示',
                    //    template: '提交成功'
                    //});
                    alertPopup.then(function (res) {
                        self.location = "vipoa://close"
                    });
                }
                else {
                    $scope.overLoading();
                    $scope.alert('提示', data.Content);
                }
            })
            .error(function (data, status, headers, config) {
                //console.log(data);
                $scope.overLoading();
                $scope.alert('提示', '提交失败');
            });

        return;


    }


    //// 触发一个按钮点击，或一些其他目标
    //$scope.showPopup = function () {
    //    $scope.data = {}

    //    // 一个精心制作的自定义弹窗
    //    var myPopup = $ionicPopup.show({
    //        template: '<input type="password" ng-model="data.wifi">',
    //        title: 'Enter Wi-Fi Password',
    //        subTitle: 'Please use normal things',
    //        scope: $scope,
    //        buttons: [
    //          { text: 'Cancel' },
    //          {
    //              text: '<b>Save</b>',
    //              type: 'button-positive',
    //              onTap: function (e) {
    //                  if (!$scope.data.wifi) {
    //                      //不允许用户关闭，除非他键入wifi密码
    //                      e.preventDefault();
    //                  } else {
    //                      return $scope.data.wifi;
    //                  }
    //              }
    //          },
    //        ]
    //    });
    //    myPopup.then(function (res) {
    //        console.log('Tapped!', res);
    //    });
    //    $timeout(function () {
    //        myPopup.close(); //由于某种原因3秒后关闭弹出
    //    }, 3000);

    //    // 一个确认对话框
    //    $scope.showConfirm = function () {
    //        var confirmPopup = $ionicPopup.confirm({
    //            title: 'Consume Ice Cream',
    //            template: 'Are you sure you want to eat this ice cream?'
    //        });
    //        confirmPopup.then(function (res) {
    //            if (res) {
    //                console.log('You are sure');
    //            } else {
    //                console.log('You are not sure');
    //            }
    //        });
    //    };

    //    // 一个提示对话框
    //    $scope.showAlert = function () {
    //        var alertPopup = $ionicPopup.alert({
    //            title: 'Don\'t eat that!',
    //            template: 'It might taste good'
    //        });
    //        alertPopup.then(function (res) {
    //            console.log('Thank you for not eating my delicious ice cream cone');
    //        });
    //    };
    //};
}])




/*---- 加班流程方法  begin   ---- */
//初始化加班明细
var initOverTimeContent = function ($scope) {

    var index = $scope.overTimeContents.length;
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
                    $scope.overTimeContents[index].startDatePart.inputDate = val;
                    //$scope.datepickerObjectModalBegin.inputDate = val;
                    console.log('日期 选择为 : ', val.Format("yyyy-MM-dd"));
                    //更新合计工时
                    $scope.overTimeContents[index].otHours = UpdateOTHours($scope.overTimeContents[index].startDatePart, $scope.overTimeContents[index].startTimePart,
                        $scope.overTimeContents[index].endDatePart, $scope.overTimeContents[index].endTimePart, $scope.userInfo.workType, $scope.overtimeTypeSelected);
                }
            },
            dateFormat: 'yyyy-MM-dd' //Optional
        };

        var enddate = {
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
                    $scope.overTimeContents[index].endDatePart.inputDate = val;
                    //$scope.datepickerObjectModalEnd.inputDate = val;
                    console.log('日期 选择为 : ', val.Format("yyyy-MM-dd"));
                    //更新合计工时
                    $scope.overTimeContents[index].otHours = UpdateOTHours($scope.overTimeContents[index].startDatePart, $scope.overTimeContents[index].startTimePart,
                        $scope.overTimeContents[index].endDatePart, $scope.overTimeContents[index].endTimePart, $scope.userInfo.workType, $scope.overtimeTypeSelected);
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
                    $scope.overTimeContents[index].startTimePart.inputEpochTime = val;
                    //$scope.timePickerObject24HourBegin.inputEpochTime = val;
                    var selectedTime = new Date(val * 1000);
                    //console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
                    //更新合计工时
                    $scope.overTimeContents[index].otHours = UpdateOTHours($scope.overTimeContents[index].startDatePart, $scope.overTimeContents[index].startTimePart,
                        $scope.overTimeContents[index].endDatePart, $scope.overTimeContents[index].endTimePart, $scope.userInfo.workType, $scope.overtimeTypeSelected);
                }
            }
        };

        var endtime = {
            inputEpochTime: ((new Date()).getHours() * 60 * 60), //Optional   //+ (new Date()).getMinutes() * 60  详细值到秒
            step: 10, //Optional
            format: 24, //Optional
            titleLabel: '请选择结束时间', //Optional
            closeLabel: '取消', //Optional
            setLabel: '选择', //Optional
            setButtonType: 'button-vipshop', //Optional
            closeButtonType: 'button-stable', //Optional
            callback: function (val) { //Mandatory
                if (typeof (val) === 'undefined') {
                    console.log('Time not selected');
                } else {
                    $scope.overTimeContents[index].endTimePart.inputEpochTime = val;
                    //$scope.timePickerObject24HourEnd.inputEpochTime = val;
                    var selectedTime = new Date(val * 1000);
                    //console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
                    //更新合计工时
                    $scope.overTimeContents[index].otHours = UpdateOTHours($scope.overTimeContents[index].startDatePart, $scope.overTimeContents[index].startTimePart,
                        $scope.overTimeContents[index].endDatePart, $scope.overTimeContents[index].endTimePart, $scope.userInfo.workType, $scope.overtimeTypeSelected);
                }
            }
        };

        //合计工时
        var otStartDatePartStr = begindate.inputDate.Format("yyyy-MM-dd");
        var otStartTimePartStr = begintime.inputEpochTime.FormatTime();
        var otEndDatePartStr = enddate.inputDate.Format("yyyy-MM-dd");
        var otEndTimePartStr = endtime.inputEpochTime.FormatTime();
        //var otHours = UpdateOTHours(begindate, begintime, enddate, endtime);

        var obj = {
            divIndex: $scope.otMaxIndex,
            startDatePart: begindate,
            startTimePart: begintime,
            //otStartTimeStr: otStartDatePartStr + " " + otStartTimePartStr,
            endDatePart: enddate,
            endTimePart: endtime,
            //otEndTimeStr: otEndDatePartStr + " " + otEndTimePartStr,
            otHours: 0,
            overTimeReasonId: "txtReason" + (index + 1),
            overTimeContentId: "txtContent" + (index + 1),
            overTimeAddressId: "txtAddress" + (index + 1),
            overTimeReason: "",
            overTimeContent: "",
            overTimeAddress: ""
        };
        $scope.overTimeContents.push(obj);
        $scope.otMaxIndex = $scope.otMaxIndex + 1;
    }


}


var UpdateOTHours = function (startDatePart, startTimePart, endDatePart, endTimePart, workType, otType) {

    //合计工时
    var otStartDatePartStr = startDatePart.inputDate.Format("yyyy-MM-dd");
    var otStartTimePartStr = startTimePart.inputEpochTime.FormatTime();
    var otEndDatePartStr = endDatePart.inputDate.Format("yyyy-MM-dd");
    var otEndTimePartStr = endTimePart.inputEpochTime.FormatTime();
    var otStartTimeStr = otStartDatePartStr + " " + otStartTimePartStr;
    var otEndTimeStr = otEndDatePartStr + " " + otEndTimePartStr;


    if (otStartTimeStr == '' || otEndTimeStr == '') return;
    var otStartTime = StringToDateTime(otStartTimeStr);
    var otEndTime = StringToDateTime(otEndTimeStr);

    if (otStartTime == null || otEndTime == null) return;
    var otHours = (otEndTime - otStartTime) / 1000 / 3600;
    if ((workType == "标准工时" && otType != "工作日")
    || (workType == "综合工时" && otType != "工作日") || (workType == "不定时" && otType == "法定假日")) {
        otHours = otHours - CaculateOTSubHours(otStartTime, otEndTime, [12, 0], [13, 0], workType, otType);
        otHours = otHours - CaculateOTSubHours(otStartTime, otEndTime, [18, 0], [18, 30], workType, otType);
    }
    var intHours = Math.floor(otHours);
    if (otHours - intHours >= 0.5) {
        otHours = intHours + 0.5;
    }
    else {
        otHours = intHours;
    }
    return otHours;

}

var StringToDateTime = function (str) {
    //yyyy-MM-dd hh:mm to Date Object
    var match = str.match(/^(\d+)-(\d+)-(\d+) (\d+)\:(\d+)/);
    if (match != null) {
        var date = new Date(match[1], match[2] - 1, match[3], match[4], match[5]);
        return date;
    } else {
        return null;
    }
}


var CaculateOTSubHours = function (otStartTime, otEndTime, ruleStartTimeArray, ruleEndTimeArray, workType, otType) {
    var needSubHours = 0;
    var otRuleStartTime = new Date(otStartTime.getFullYear(), otStartTime.getMonth(), otStartTime.getDate());
    otRuleStartTime.setHours(ruleStartTimeArray[0], ruleStartTimeArray[1], 0, 0);
    var otRuleEndTime = new Date(otEndTime.getFullYear(), otEndTime.getMonth(), otStartTime.getDate());
    otRuleEndTime.setHours(ruleEndTimeArray[0], ruleEndTimeArray[1], 0, 0);
    if (otEndTime >= otRuleStartTime && otStartTime <= otRuleEndTime) {
        if ((otEndTime - otRuleStartTime) >= (otRuleEndTime - otRuleStartTime)) {
            needSubHours = (otRuleEndTime - otRuleStartTime) / 1000 / 3600;
        }
        else {
            needSubHours = 0;
        }
    }

    if (otEndTime <= otRuleStartTime || otStartTime >= otRuleEndTime) {
        needSubHours = 0;
    }
    if (otStartTime < otRuleStartTime && otRuleStartTime < otEndTime && otEndTime < otRuleEndTime) {
        needSubHours = (otEndTime - otRuleStartTime) / 1000 / 3600;
    }
    if (otEndTime > otRuleEndTime && otRuleStartTime < otStartTime && otStartTime < otRuleEndTime) {
        needSubHours = (otRuleEndTime - otStartTime) / 1000 / 3600;
    }
    return needSubHours;
}

/*---- 加班流程方法  end   ---- */