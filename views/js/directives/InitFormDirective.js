/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directiveInit = function ($parse) {
      
  return {
  
	link: function (scope, element, attrs) {
        var attr = attrs.initFromForm || attrs.ngModel || element.attrs('name'),
        val = attrs.value;
        $parse(attr).assign(scope, val)
	    }
  };
 
	  
    };
	directiveInit.$inject = ['$parse'];
    return directiveInit;
});