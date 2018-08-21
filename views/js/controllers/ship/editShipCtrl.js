'use strict';
define(function () {
    return ['$scope', 'servicePHP', 'globalVariable', '$http', function ($scope, servicePHP, globalVariable, $http) {
    	var parameters = {};
        
        servicePHP.requestAPI(parameters,"ship/"+globalVariable.getIdItem(),"GET","Obteniendo Datos").then(function(response){
                if (response.statusText=="OK"){
                    $scope.item=response.data[0];		
                }				
		    }).catch(function (err) {// handle errors here if needed
		    });	
 
        //Funcion de editar, manda llamar el servicio de edicion para clientes.
    	$scope.update=function(parameters){
            servicePHP.requestAPI(parameters,"ship/"+globalVariable.getIdItem(),"PUT","Actualizando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/barcos';
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