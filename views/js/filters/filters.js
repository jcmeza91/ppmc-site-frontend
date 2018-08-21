'use strict';

define(function (require) {
    require('angular').module('pjdev.filters', []).
    	filter('interpolate', require('filters/InterpolateFilter')).
    	filter('searchItems', require('filters/search')).
    	filter('searchProduct', require('filters/searchProduct')).
    	filter('searchTotal', require('filters/searchTotal')).
    	filter('searchId', require('filters/searchId')).
    	filter('searchDate', require('filters/searchDate'));
});
