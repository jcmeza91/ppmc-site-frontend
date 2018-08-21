'use strict';

define(['angular'], function() {
    return angular.module('pjdev', [
        'ngRoute',
        'smart-table',
        'ui.bootstrap',
        'ngCookies',
        'pjdev.filters',
        'pjdev.services',
        'pjdev.directives',
        'pjdev.controllers',
        'angularFileUpload',
        'angularGrid'
        
    ]);
});
