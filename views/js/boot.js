'use strict';

require.config({
	paths: {
        async: "../bower_components/requirejs-plugins/src/async",
        jquery: '../bower_components/jquery/dist/jquery',
        angular: '../bower_components/angular/angular',
		angularResource: '../bower_components/angular-resource/angular-resource',
		angularRoute: '../bower_components/angular-route/angular-route',
		angularMocks: '../bower_components/angular-mocks/angular-mocks',		
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        waitingFor: '../bower_components/waitingfor/waitingfor',
        smartTable: '../bower_components/smartTable/smart-table.min',
        uibootstrap: '../bower_components/ui-bootstrap.min',
        angularFile: '../bower_components/angular-file-upload/dist/angular-file-upload.min',
        angularGrid: '../bower_components/angulargrid/angulargrid.min',
        tpls: '../bower_components/ui-bootstrap-tpls.min',
        ngCookies: '../bower_components/angular-cookies/angular-cookies',
		text: '../bower_components/requirejs-text/text'
	},
	shim: {
        "bootstrap": {
            deps: ["jquery"]
        },
		'angular' : {'exports' : 'angular'},
		
		'angularRoute': ['angular'],
		
		'angularMocks': {
			deps:['angular'],
			'exports':'angular.mock'
		},
		'angularFile' : {deps: ['angular']},
		'angularResource' : {deps: ['angular']},
		'ngCookies' : {deps: ['angular']},
		'smartTable' : {deps: ['angular']},
		'uibootstrap' : {deps: ['angular']},
		'angularFile' : {deps: ['angular']},
		'angularGrid' : {deps: ['angular']},
		'tpls' : {deps: ['angular']},
	},
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require([
    // Add additional dependencies
    'jquery',
    'bootstrap',
    'angular',
    'angularResource',
    'angularRoute',
    'uibootstrap',
    'tpls',
    'app',
    'angularFile',
    'smartTable',
    'angularFile',
    'angularGrid',
    'ngCookies',
    'controllers/controllers',
    'services/services',
    'directives/directives',
    'filters/filters',   
    'routes',
], function () {
    angular.bootstrap(document, ['pjdev']);
});

