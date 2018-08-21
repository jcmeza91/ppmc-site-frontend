'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', '$filter','$http', 'globalVariable',function ($scope, appVersion, servicePHP, $filter,$http,globalVariable) {

        $scope.itemsList = [];
        $scope.itemsList2 = [];
        
        var parameters = {};
        
        servicePHP.requestAPI(parameters,"ship","GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.itemsList=response.data;					
                $scope.itemsList2=response.data;	
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.delete = function(item,index){
            var parameters = {};
            
            servicePHP.requestAPI(parameters,"ship/"+item.shipId,"DELETE","Removiendo registro").then(function(response){
                if (response.statusText=="OK"){
                    $scope.itemsList.splice(index, 1);	
                }			
 			}).catch(function (err) {// handle errors here if needed
 			});
        }
        
        $scope.add = function(){
            window.location.href = '#/barco';  	
        }
        
        $scope.edit = function(item){
            globalVariable.setIdItem(item.shipId);
            window.location.href = '#/editarBarco';  	
        }
        
        
        
        /*footer table*/
        $scope.itemsByPage=10; 
    }];
});
