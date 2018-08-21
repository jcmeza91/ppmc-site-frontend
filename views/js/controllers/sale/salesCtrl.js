'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', '$filter','$http', 'globalVariable',function ($scope, appVersion, servicePHP, $filter,$http,globalVariable) {

        $scope.itemsList = [];
        $scope.itemsList2 = [];
        
        var parameters = {};
        
        servicePHP.requestAPI(parameters,"sale","GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.itemsList=response.data;					
                $scope.itemsList2=response.data;	
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.delete = function(item,index){
            var parameters = {};
            
            servicePHP.requestAPI(parameters,"sale/"+item.saleId,"DELETE","Removiendo registro").then(function(response){
                if (response.statusText=="OK"){
                    $scope.itemsList.splice(index, 1);	
                }			
 			}).catch(function (err) {// handle errors here if needed
 			});
        }
        
        $scope.add = function(){
            window.location.href = '#/venta';  	
        }
        
        $scope.return = function(item,index){
            var inventoryParameters = {
                returnsSaleId: item.saleId,
                returnsAmount: item.saleAmount
            };
            
            servicePHP.requestAPI(inventoryParameters,"returns","POST","Agregando Registro").then(function(response){
                if (response.statusText=="OK"){
                    //window.location.href = '#/precios';
                    window.location.reload(true);
                    $scope.itemsList.splice(index, 1);
                }
			 }).catch(function (err) {// handle errors here if needed
			 }); 	
        }
        
        
        
        /*footer table*/
        $scope.itemsByPage=10; 
    }];
});
