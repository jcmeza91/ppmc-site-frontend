'use strict';

define(function () {
    return ['appVersion', function(appVersion) {
        return function(text) {
            return String(text).replace(/\%VERSION\%/mg, appVersion.version);
        };
    }];
});

