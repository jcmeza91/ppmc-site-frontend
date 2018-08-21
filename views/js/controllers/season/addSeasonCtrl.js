'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        
        $scope.add = function(parameters) {
            parameters.seasonDate = document.getElementById("seasonDate").value + "T12:00:00";
    		servicePHP.requestAPI(parameters,"season","POST","Creando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/temporadas';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
    }];
});
