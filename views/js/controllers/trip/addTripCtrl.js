'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        var parameters = {};
        $scope.itemsList = [];
        $scope.itemsList2 = [];
        
        servicePHP.requestAPI(parameters,"ship","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options1=response.data;
                $scope.item = {tripShipId : $scope.options1[0].shipId}; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"trip","GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.itemsList=response.data;					
                $scope.itemsList2=response.data;	
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.add = function(parameters) {
            parameters.tripDate = document.getElementById("tripDate").value + "T12:00:00";
    		servicePHP.requestAPI(parameters,"trip","POST","Creando Registro").then(function(response){
                if (response.statusText=="OK"){
                    var inventoryParam = {
                        "inventoryTripId": response.data.message
                    };
                    //Create Inventory
                    servicePHP.requestAPI(inventoryParam,"inventory","POST","Creando Registro").then(function(response){
                        if (response.statusText=="OK"){
                            window.location.reload(true);
                            
                        }
                     }).catch(function (err) {// handle errors here if needed
                     });
                    //END Create Inventory
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
        
        $scope.addCrew = function(item){
            globalVariable.setIdItem(item.tripId);
            window.location.href = '#/asignarTripulacion';  	
        }
        
        $scope.addReport = function(item){
            globalVariable.setIdItem(item.tripId);
            window.location.href = '#/inventario';  	
        }
        
        $scope.delete = function(item,index){
            var parameters = {};
            
            servicePHP.requestAPI(parameters,"trip/"+item.tripId,"DELETE","Removiendo registro").then(function(response){
                if (response.statusText=="OK"){
                    $scope.itemsList.splice(index, 1);	
                }			
 			}).catch(function (err) {// handle errors here if needed
 			});
        }
        
    }];
});
