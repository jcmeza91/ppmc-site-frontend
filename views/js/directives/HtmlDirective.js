/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directiveHtml = function ($compile) {
      
  return {
    restrict: 'AE',
    replace: true,
	
	controller:'loginCtrl',
	
    link: function (scope, ele, attrs, controller) {
    scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
	  
		  
			  
    }
	
  };
 
	  
    };
	directiveHtml.$inject = ['$compile'];
    return directiveHtml;
});