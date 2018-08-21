'use strict';
define(function () {
    return ['$scope', 'servicePHP', 'globalVariable', '$http', function ($scope, servicePHP, globalVariable, $http) {
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
        
        servicePHP.requestAPI(parameters,"price/"+globalVariable.getIdItem(),"GET","Obteniendo Datos").then(function(response){
                if (response.statusText=="OK"){
                    $scope.item=response.data[0];
                    $scope.item.priceDate=new Date($scope.item.priceDate);
                }				
		    }).catch(function (err) {// handle errors here if needed
		    });	
 
        //Funcion de editar, manda llamar el servicio de edicion para clientes.
    	$scope.update=function(parameters){
            parameters.priceDate = document.getElementById("priceDate").value + "T12:00:00";
            servicePHP.requestAPI(parameters,"price/"+globalVariable.getIdItem(),"PUT","Actualizando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/precios';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });
    	}
    	
        //disabled input angularjs	
    	$scope.model = {
            isDisabled: true
        };
    }];
});