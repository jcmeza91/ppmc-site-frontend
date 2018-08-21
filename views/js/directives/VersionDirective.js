'use strict';

define(function () {
    return ['appVersion', function(appVersion) {
        return function(scope, elm, attrs) {
            elm.text(appVersion.version);
        };
    }];
});