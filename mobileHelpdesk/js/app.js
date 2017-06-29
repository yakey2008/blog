// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.services', 'ionic-datepicker', 'ionic-timepicker', 'ngDialog', 'leave.controller', 'overtime.controller', 'trouble.controller', 'reclockcard.controller', 'companybill.controller', 'flow'])
    //angular.module('starter', ['ionic', 'starter.controllers', 'starter.directives', 'starter.services', 'ionic-datepicker', 'ionic-timepicker', 'ngDialog', 'leave.controller', 'overtime.controller'])

    .run(["$ionicPlatform", function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    }])

    .config(["$stateProvider", "$ionicConfigProvider", "$urlRouterProvider", function ($stateProvider, $ionicConfigProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            // setup an abstract state for the tabs directive


            .state('overtime', {
                url: "/workflow/overtime",
                templateUrl: "templates/workflow/overtime.html",
                controller: 'OvertimeCtrl'
            })

            .state('leave', {
                url: "/workflow/leave",
                templateUrl: "templates/workflow/leave.html",
                controller: 'LeaveCtrl'
            })
            .state('reclockcard', {
                url: "/workflow/reclockcard",
                templateUrl: "templates/workflow/reclockcard.html",
                controller: 'ReclockCardCtrl'
            })
            .state('userinfo', {
                url: "/leave/userinfo",
                templateUrl: "templates/common/userinfo.html",
                controller: 'LeaveCtrl'
            })

            .state('leavetips', {
                url: "/leave/tips",
                templateUrl: "templates/common/tips.html",
                controller: 'LeaveCtrl'
            })

            .state('overtimetips', {
                url: "/overtime/tips",
                templateUrl: "templates/common/tips.html",
                controller: 'OvertimeCtrl'
            })
            //邹贵初 移动报障入口页面 报障记录列表 Start
            .state('navigate', {
                url: "/trouble/navigate",
                templateUrl: "templates/trouble/navigate.html?v1.3.3",
                controller: 'TroubleNavCtrl'
            })
            .state('historyList', {
                url: "/trouble/historyList",
                templateUrl: "templates/trouble/trouble-historyList.html?v1.3.3",
                controller: 'TroubleList'
            })
            //详情页
            .state('historyDetail', {
                url: "/trouble/historyDetail/:troubleid&:sourcetype",
                templateUrl: "templates/trouble/trouble-historyDetail.html?v1.3.3",
                controller: 'TroubleDetail'
            })
            //邹贵初 End
            .state('unite', {
                url: "/trouble/unite",
                templateUrl: "templates/trouble/unite.html?v1.3.3",
                controller: 'TroubleCtrl'
            })

            .state('companybillinfo', {
                url: "/companybill/companybillinfo",
                templateUrl: "templates/companybill/companybillinfo.html",
                controller: 'CompanyBillCtrl'
            })

        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.
        //when('/overtime', {
        //    controller: 'OvertimeCtrl',
        //    templateUrl: 'templates/workflow/overtime.html'
        //}).
        //when('/put/:name', {
        //    controller: PutController,
        //    templateUrl: 'put.html'
        //});



        if (getQueryStringByName("type") == "overtime") {
            $urlRouterProvider.otherwise('/workflow/overtime');
        }
        else if (getQueryStringByName("type") == "leave") {
            $urlRouterProvider.otherwise('/workflow/leave');
        }
        //邹贵初 移动报障入口页面 Start
        else if (getQueryStringByName("type") == "unite") {
            $urlRouterProvider.otherwise('/trouble/navigate');
        }
        //邹贵初 End
        // else if (getQueryStringByName("type") == "unite") {
        //     $urlRouterProvider.otherwise('/trouble/unite');
        // }
        else if (getQueryStringByName("type") == "reclockcard") {
            $urlRouterProvider.otherwise('/workflow/reclockcard');
        }
        else if (getQueryStringByName("type") == "companybillinfo") {
            $urlRouterProvider.otherwise('/companybill/companybillinfo');
            $ionicConfigProvider.scrolling.jsScrolling(true);
        }
    }])

    .config(['flowFactoryProvider', function (flowFactoryProvider) {
        flowFactoryProvider.defaults = {
            chunkSize: 10 * 1024 * 1024,
            forceChunkSize: true,
            target: SiteConfigs.SubSite + 'Overtime/UploadFile',
            permanentErrors: [404, 500, 501],
            maxChunkRetries: 1,
            chunkRetryInterval: 5000,
            simultaneousUploads: 4,
            method: 'multipart',
            testMethod: 'POST',
            testChunks: false,
            uploadMethod: 'POST',
            singleFile: false
        };
        flowFactoryProvider.on('catchAll', function (event) {
            console.log('catchAll', arguments);
        });
        // Can be used with different implementations of Flow.js
        flowFactoryProvider.factory = fustyFlowFactory;
    }]);

function getQueryStringByName(name) {

    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));

    if (result == null || result.length < 1) {

        return "";

    }

    return result[1];

};