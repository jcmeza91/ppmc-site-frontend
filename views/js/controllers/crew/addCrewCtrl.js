'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        
        $scope.add = function(parameters) {
            
    		servicePHP.requestAPI(parameters,"crew","POST","Creando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/tripulaciones';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
    }];
});
