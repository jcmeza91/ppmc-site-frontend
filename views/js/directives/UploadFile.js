/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var file = function () {
        return {
            scope: {
                file: '='
            },
            link: function (scope, el, attrs) {
                el.bind('change', function (event) {
                    var file = event.target.files[0];
                    scope.file = file ? file : undefined;
                    scope.$apply();
                });
            }
        }
    };

    file.$inject = [];
    return file;
});