'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable', function ($scope, appVersion, servicePHP, globalVariable) {
        var parameters = {};
        
        servicePHP.requestAPI(parameters,"inventoryDetail","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options1=response.data; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"client","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options2=response.data;
                $scope.item = { saleInventoryDetailId : $scope.options1[0].inventoryDetailId, saleClientId : $scope.options2[0].clientId }; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.add = function(parameters) {
            
    		servicePHP.requestAPI(parameters,"sale","POST","Creando Registro").then(function(response){
                if (response.statusText=="OK"){
                    window.location.href = '#/ventas';
                    window.location.reload(true);
                }
			 }).catch(function (err) {// handle errors here if needed
			 });	
        }
    }];
});
