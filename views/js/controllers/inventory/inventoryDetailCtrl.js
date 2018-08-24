'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        $scope.itemsList = [];
        $scope.itemsList2 = [];
        var parameters = {};
        
        $scope.tipo = [ { "name": "MARQUETA" }, { "name": "BOLSA" } ];
        $scope.unidad = [ { "name": "5LBS" }, { "name": "2KGS" }, { "name": "4LBS" } ];
        $scope.item = {inventoryPackageType : $scope.tipo[0].name, inventoryPackageUnit : $scope.unidad[0].name}; 
        $scope.data = { }; 
        
        servicePHP.requestAPI(parameters,"inventory/"+globalVariable.getIdItem(),"GET","Obteniendo registros").then(function(response){
            console.log(response);
            if (response.statusText=="OK"){
                $scope.item=response.data[0];
                $scope.item.inventoryDate=new Date($scope.item.inventoryDate);
                if($scope.item.inventoryReportDate !== null){
                    $scope.item.inventoryReportDate=new Date($scope.item.inventoryReportDate);
                }
                console.log($scope.item);
                //Get Invetory Detail
                servicePHP.requestAPI(parameters,"inventoryDetail/"+$scope.item.inventoryId,"GET","Obteniendo registros").then(function(resp){
                    if (response.statusText=="OK"){
                        $scope.itemsList=resp.data;
                        $scope.itemsList2=resp.data;
                    }		
                }).catch(function (err) {// handle errors here if needed
                });
                //Get Invetory Detail
                
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.update = function(parameters) {
            parameters.inventoryReportDate = document.getElementById("inventoryReportDate").value + "T12:00:00";
            //parameters.inventoryDate = $scope.item.inventoryDate;
            delete parameters.inventoryDate;
            servicePHP.requestAPI(parameters,"inventory/"+parameters.inventoryId,"PUT","Actualizando Registro").then(function(response){
                if (response.statusText=="OK"){
                    servicePHP.requestAPI(parameters,"inventory/"+globalVariable.getIdItem(),"GET","Obteniendo registros").then(function(response){
                        if (response.statusText=="OK"){
                            $scope.item=response.data[0];
                            $scope.item.inventoryDate=new Date($scope.item.inventoryDate);
                            if($scope.item.inventoryReportDate !== null){
                                $scope.item.inventoryReportDate=new Date($scope.item.inventoryReportDate);
                            }
                        }		
                    }).catch(function (err) {// handle errors here if needed
                    });
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
        
        $scope.add = function(parameters) {
            var inventoryParameters = {
                inventoryDetailInventoryId: $scope.item.inventoryId,
                inventoryDetailSpecieId: parameters.inventoryDetailSpecieId,
                inventoryDetailAmount: parameters.inventoryDetailAmount,
                inventoryDetailAmountLeft: parameters.inventoryDetailAmount,
            };
            
            servicePHP.requestAPI(inventoryParameters,"inventoryDetail","POST","Agregando Registro").then(function(response){
                if (response.statusText=="OK"){
                    //window.location.href = '#/precios';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
        
        $scope.delete = function(item,index){
            var parameters = {};
            
            servicePHP.requestAPI(parameters,"inventoryDetail/"+item.inventoryDetailId,"DELETE","Removiendo registro").then(function(response){
                if (response.statusText=="OK"){
                    $scope.itemsList.splice(index, 1);	
                }			
 			}).catch(function (err) {// handle errors here if needed
 			});
        }
        
    }];
});
