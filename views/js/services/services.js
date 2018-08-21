'use strict';

define(function(require) {
    require('angular').module('pjdev.services', []).
        service("appVersion", require('services/appVersion')).
        service("globalVariable", require('services/globalVariable')).
        service("serviceAlert", require('services/serviceAlert')).
        service("servicePHP", require('services/servicePHP'));
});