angular.module('companybill.controller', [])

.controller('CompanyBillCtrl', ["$scope", "$http", "$timeout", "CompanyBillAPI", function ($scope, $http, $timeout, CompanyBillAPI) {

    CompanyBillAPI.getCompanyBillInfo().then(function (data) {
        $scope.entity = data
    }, function (data) {
        console.log(data);
    });

}])
.factory('CompanyBillAPI', ["$http", "$q", function ($http, $q) {
    var post = function (url, options) {
        var deferred = $q.defer();
        $http.post(url, options).success(function (data) {
            data = angular.fromJson(data);
            if (data.Result.Code == 1) {
                deferred.resolve(data.Content);
            } else {
                deferred.reject(data.Content);
            }
        }).error(function (data, state) {
            deferred.reject(data);
        });
        return deferred.promise;
    }

    return {
        getCompanyBillInfo: function () {
            return post(SiteConfigs.SubSite + "CompanyBill/GetUserCompanyBillInfo", {});
        }
    };
}]);