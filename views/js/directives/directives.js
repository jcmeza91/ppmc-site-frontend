'use strict';

define(function (require) {
    require('angular').module('pjdev.directives', []).
    	directive('appVersion', require('directives/VersionDirective')).
    	directive('dynamic', require('directives/HtmlDirective')).
    	directive('initForm', require('directives/InitFormDirective')).
    	directive('uploadFile', require('directives/UploadFile')).
    	directive('ngThumb', require('directives/ngThumb'));

});