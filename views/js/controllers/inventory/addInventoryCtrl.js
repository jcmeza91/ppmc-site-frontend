'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        $scope.itemsList = [];
        $scope.itemsList2 = [];
        
        var parameters = {};
        
        $scope.tipo = [ { "name": "MARQUETA" }, { "name": "BOLSA" } ];
        $scope.unidad = [ { "name": "5LBS" }, { "name": "2KGS" }, { "name": "4LBS" } ];
        $scope.clientes = [ ];
        $scope.item = {inventoryPackageType : $scope.tipo[0].name, inventoryPackageUnit : $scope.unidad[0].name}; 
        $scope.data = { }; 
        
        servicePHP.requestAPI(parameters,"inventory/"+globalVariable.getIdItem(),"GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.item=response.data[0];
                $scope.item.inventoryDate=new Date($scope.item.inventoryDate);
                if($scope.item.inventoryReportDate !== null){
                    $scope.item.inventoryReportDate=new Date($scope.item.inventoryReportDate);
                }
                
                //Get Invetory Detail
                servicePHP.requestAPI(parameters,"inventoryDetail/"+$scope.item.inventoryId,"GET","Obteniendo registros").then(function(response){
                    if (response.statusText=="OK"){
                        $scope.itemsList=response.data;
                        $scope.itemsList2=response.data;
                        console.log($scope.itemsList);
                    }		
                }).catch(function (err) {// handle errors here if needed
                });
                //Get Invetory Detail
                
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"specie","GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                //inventoryDetailAmount
                $scope.especie = response.data;
                $scope.data = {inventoryDetailSpecieId : $scope.especie[0].specieId };
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"client","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.clientes=response.data;
                $scope.sale = {saleClientId : $scope.clientes[0].clientId}; 
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
        
        $scope.saleProduct = function(parameters,client,cantidad,price,index) {
            var saleParameters = {
                saleInventoryDetailId: parameters.inventoryDetailId,
                saleClientId: client,
                saleAmount: cantidad,
                salePrice: price
            };
            
            console.log("Parameters: ");
            console.log(saleParameters);
            if(client !== undefined && cantidad !== undefined && price !== undefined)
            {
                if(cantidad > parameters.inventoryDetailAmountLeft )
                {
                    alert("No hay suficiente producto para cubrir la cantidad solicitada");
                }else{
                    servicePHP.requestAPI(saleParameters,"sale","POST","").then(function(response){
                        if (response.statusText=="OK"){
                            $scope.itemsList[index].inventoryDetailAmountLeft = $scope.itemsList[index].inventoryDetailAmountLeft - cantidad;
                        }
                     }).catch(function (err) {// handle errors here if needed
                     });
                }
            }else{
                alert("Favor de llenar todos los campos [Cliente, Cantidad y Precio]");
            }
        }
        
        $scope.totalSale = function(parameters) {
            var saleParameters = {
                saleInventoryDetailId: $scope.item.inventoryId,
                saleClientId: parameters.saleClientId,
                saleAmount: 0,
                salePrice: parameters.price
            };
            
            for(var i=0; $scope.itemsList.length > i; i++)
            {
                saleParameters.saleInventoryDetailId = $scope.itemsList[i].inventoryDetailId;
                saleParameters.saleAmount = $scope.itemsList[i].inventoryDetailAmountLeft;
                console.log("CANTIDAD " + i + ": ");
                console.log(saleParameters);
                servicePHP.requestAPI(saleParameters,"sale","POST","").then(function(response){
                    if (response.statusText=="OK"){
                        console.log(saleParameters);
                    }
                 }).catch(function (err) {// handle errors here if needed
                 });
                
            }
            //window.location.reload(true);	
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
