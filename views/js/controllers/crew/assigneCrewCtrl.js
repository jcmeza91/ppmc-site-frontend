'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', '$filter','$http', 'globalVariable',function ($scope, appVersion, servicePHP, $filter,$http,globalVariable) {

        $scope.itemsList = [];
        $scope.itemsList2 = [];
        $scope.roles = {};
        
        var parameters = {};
        
        servicePHP.requestAPI(parameters,"role","GET",'').then(function(response){
            if (response.statusText=="OK"){
                $scope.options=response.data;
                $scope.item = {roles : $scope.options[0].roleId}; 
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"crew/"+globalVariable.getIdItem(),"GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.crewList=response.data;					
                $scope.crewList2=response.data;	
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        servicePHP.requestAPI(parameters,"employee","GET","Obteniendo registros").then(function(response){
            if (response.statusText=="OK"){
                $scope.itemsList=response.data;					
                $scope.itemsList2=response.data;	
            }		
        }).catch(function (err) {// handle errors here if needed
        });
        
        $scope.delete = function(item,index){
            var parameters = {};
            servicePHP.requestAPI(parameters,"crew/"+item.crewId,"DELETE","Removiendo registro").then(function(response){
                if (response.statusText=="OK"){
                    $scope.crewList.splice(index, 1);	
                }			
 			}).catch(function (err) {// handle errors here if needed
 			});
        }
        
        $scope.add = function(parameters,roleId) {
            if(roleId == undefined)
            {
                alert("Selecciona un rol");
            }else{
               var crewParameters = {
                    crewEmployeeId: parameters.employeeId,
                    crewRoleId: roleId,
                    crewTripId: globalVariable.getIdItem()
                };

                servicePHP.requestAPI(crewParameters,"crew","POST","Creando Registro").then(function(response){
                    if (response.statusText=="OK"){
                        //window.location.href = '#/precios';
                        window.location.reload(true);
                    }
                 }).catch(function (err) {// handle errors here if needed
                 });	
            }
            
        }
        
        $scope.edit = function(item){
            globalVariable.setIdItem(item.employeeId);
            window.location.href = '#/editarEmpleado';  	
        }
        
        
        
        /*footer table*/
        $scope.itemsByPage=10; 
    }];
});
