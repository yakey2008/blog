//By Rajeshwar Patlolla - rajeshwar.patlolla@gmail.com
//https://github.com/rajeshwarpatlolla

(function () {
  'use strict';

  angular.module('ionic-datepicker')
    .service('IonicDatepickerService', IonicDatepickerService);

  IonicDatepickerService.$inject = [];
  function IonicDatepickerService() {

    this.lastSelectedDate = null;

    this.monthsList = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];

    this.getYearsList = function (from, to) {
      var yearsList = [],
        minYear = 1900,
        maxYear = 2100;

      if (from) {
        minYear = new Date(from).getFullYear();
      }

      if (to) {
        maxYear = new Date(to).getFullYear();
      }

      for (var i = minYear; i <= maxYear; i++) {
        yearsList.push(i);
      }

      return yearsList;
    };

    this.setLastSelectedDate = function (val) {
      this.lastSelectedDate = val;
    };
    this.getLastSelectedDate = function () {
      return this.lastSelectedDate;
    };

  }

})();