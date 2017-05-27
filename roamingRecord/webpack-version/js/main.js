require('es5-shim');
require('es5-shim/es5-sham');
require('core-js/es6/object');
require('../css/normalize.min.css');
require('../lib/select2.min.css');
require('../css/index.scss');
var jQuery = require('jquery');
var select2 = require('../lib/select2.min.js');
var nicecsroll = require('../lib/jquery.nicescroll.min.js');

jQuery(function ($) {
    $('#js-select2').select2({
        minimumResultsForSearch: Infinity,
        width: '180px'
    })
    $('.msg-content').niceScroll();
})