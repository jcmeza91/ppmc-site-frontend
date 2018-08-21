'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        var parameters = {};
        
        servicePHP.requestAPI(parameters,"specie","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options1=response.data; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"client","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options2=response.data;
                $scope.item = {priceClientId : $scope.options2[0].clientId, priceSpecieId : $scope.options1[0].specieId}; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.add = function(parameters) {
            parameters.priceDate = document.getElementById("priceDate").value + "T12:00:00";
    		servicePHP.requestAPI(parameters,"price","POST","Creando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/precios';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
    }];
});
