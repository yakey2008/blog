angular.module('starter.services', [])


    .factory('backend', ["$http", "$q", function ($http, $q) {
        return {
            getBackendInfo: function () {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Overtime/GetBackendInfo";
                $http.get(url).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载后台信息失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载后台信息失败");
                });
                return deferred.promise;
            },
            getUserInfoByCode: function (code) {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Leave/GetAgentOtherInfo";
                $http.get(url, { params: { code: code } }).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载后台信息失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载后台信息失败");
                });
                return deferred.promise;
            }
            //getCurrentUser: function () {
            //    var deferred = $q.defer();
            //    var url = "/Overtime/GetCurrentUser";
            //    $http.get(url).success(function (data, status, headers, config) {
            //        if (data == null || data == "") {
            //            deferred.reject('获取用户失败');
            //        } else {
            //            deferred.resolve(data);
            //        }
            //    }).error(function (data, status, headers, config) {
            //        deferred.reject("获取用户失败");
            //    });
            //    return deferred.promise;
            //},
            //getVersion: function () {
            //    var deferred = $q.defer();
            //    var url = "/Overtime/GetJSCSSVersion";
            //    $http.get(url).success(function (data, status, headers, config) {
            //        if (data == null || data == "") {
            //            deferred.reject('获取版本号失败');
            //        } else {
            //            deferred.resolve(data);
            //        }
            //    }).error(function (data, status, headers, config) {
            //        deferred.reject("获取版本号失败");
            //    });
            //    return deferred.promise;
            //}
        };
    }])



    .factory('troubleServices', ["$http", "$q", function ($http, $q) {
        return {
            getTroubleSysTypes: function () {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Trouble/GetTopTroubleSysTypes";
                $http.get(url).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载故障类别失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载故障类别失败");
                });
                return deferred.promise;
            },
            getTroubleTypeBySysTypeID: function (id) {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Trouble/GetTroubleTypeBySysTypeID";
                $http.get(url, { params: { troubleSysTypeID: id } }).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载问题类型失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载问题类型失败");
                });
                return deferred.promise;
            },
            getTypePropertyByTypeID: function (id) {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Trouble/GetTypePropertyByTypeID";
                $http.get(url, { params: { troubleTypeID: id } }).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载具体问题失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载具体问题失败");
                });
                return deferred.promise;
            },
            getTroubleAreaBySysID: function (id) {
                var deferred = $q.defer();
                var url = SiteConfigs.SubSite + "Trouble/GetTroubleAreaBySysID";
                $http.get(url, { params: { troubleSysID: id } }).success(function (data, status, headers, config) {
                    if (data == null || data == "") {
                        deferred.reject('加载报障区域失败');
                    } else {
                        deferred.resolve(data);
                    }
                }).error(function (data, status, headers, config) {
                    deferred.reject("加载报障区域失败");
                });
                return deferred.promise;
            }
        };
    }])
    .factory('StrUtil', function () {   //字符操作
        return {
            getStrByteLength: function (str) {
                if (str == null) return 0;
                if (typeof str != "string") {
                    str += "";
                }
                return str.replace(/[^\x00-\xff]/g, "01").length;
            }
        }
    })
    //.factory('fileReader', ["$q", "$log", function ($q, $log) {
    //    var onLoad = function (reader, deferred, scope) {
    //        return function () {
    //            scope.$apply(function () {
    //                deferred.resolve(reader.result);
    //            });
    //        };
    //    };
    //    var onError = function (reader, deferred, scope) {
    //        return function () {
    //            scope.$apply(function () {
    //                deferred.reject(reader.result);
    //            });
    //        };
    //    };
    //    var getReader = function (deferred, scope) {
    //        var reader = new FileReader();
    //        reader.onload = onLoad(reader, deferred, scope);
    //        reader.onerror = onError(reader, deferred, scope);
    //        return reader;
    //    };
    //    var readAsDataURL = function (file, scope) {
    //        var deferred = $q.defer();
    //        var reader = getReader(deferred, scope);
    //        reader.readAsDataURL(file);
    //        return deferred.promise;
    //    };
    //    return {
    //        readAsDataUrl: readAsDataURL
    //    };
    //}])





    ;