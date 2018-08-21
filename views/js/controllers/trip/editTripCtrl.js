'use strict';
define(function () {
    return ['$scope', 'servicePHP', 'globalVariable', '$http', function ($scope, servicePHP, globalVariable, $http) {
    	var parameters = {};
        
        servicePHP.requestAPI(parameters,"ship","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options1=response.data;
                $scope.item.tripDate=new Date($scope.item.tripDate);
                $scope.item = {tripShipId : $scope.options1[0].shipId}; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });	
 
        //Funcion de editar, manda llamar el servicio de edicion para clientes.
    	$scope.update=function(parameters){
            parameters.tripDate = document.getElementById("tripDate").value + "T12:00:00";
            servicePHP.requestAPI(parameters,"trip/"+globalVariable.getIdItem(),"PUT","Actualizando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/viajes';
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