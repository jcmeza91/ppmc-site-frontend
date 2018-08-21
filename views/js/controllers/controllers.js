'use strict';

define(function (require) {
    	require('angular').module('pjdev.controllers', ['pjdev.services']).    
    
    	//General Controllers
    	controller('loginCtrl', require('controllers/login/loginCtrl')).//Controladores Generales
    	controller('homeCtrl', require('controllers/home/homeCtrl')).
        
        //Client Controllers
        controller('clientsCtrl', require('controllers/client/clientsCtrl')).
		controller('addClientCtrl', require('controllers/client/addClientCtrl')).
		controller('editClientCtrl', require('controllers/client/editClientCtrl')).
        
        //Crew Controllers
        controller('crewCtrl', require('controllers/crew/crewCtrl')).
		controller('addCrewCtrl', require('controllers/crew/addCrewCtrl')).
		controller('editCrewCtrl', require('controllers/crew/editCrewCtrl')).
		controller('assigneCrewCtrl', require('controllers/crew/assigneCrewCtrl')).
        
    	//Empleyee Controllers
        controller('employeesCtrl', require('controllers/employee/employeesCtrl')).
		controller('addEmployeeCtrl', require('controllers/employee/addEmployeeCtrl')).
		controller('editEmployeeCtrl', require('controllers/employee/editEmployeeCtrl')).
    
        //Inventory Controllers
        controller('inventoriesCtrl', require('controllers/inventory/inventoriesCtrl')).
		controller('addInventoryCtrl', require('controllers/inventory/addInventoryCtrl')).
		controller('editInventoryCtrl', require('controllers/inventory/editInventoryCtrl')).
		controller('detailInventoryCtrl', require('controllers/inventory/inventoryDetailCtrl')).
        
        //Inventory Detail Controllers
        controller('inventoryDetailCtrl', require('controllers/inventoryDetail/inventoryDetailCtrl')).
		controller('addInventoryDetailCtrl', require('controllers/inventoryDetail/addInventoryDetailCtrl')).
		controller('editInventoryDetailCtrl', require('controllers/inventoryDetail/editInventoryDetailCtrl')).
        
        //Price Controllers
        controller('pricesCtrl', require('controllers/price/pricesCtrl')).
		controller('addPriceCtrl', require('controllers/price/addPriceCtrl')).
		controller('editPriceCtrl', require('controllers/price/editPriceCtrl')). 
        
        //Return Controllers
        controller('returnsCtrl', require('controllers/return/returnsCtrl')).
		controller('addReturnCtrl', require('controllers/return/addReturnCtrl')).
		controller('editReturnCtrl', require('controllers/return/editReturnCtrl')).
        
        //Role Controllers
        controller('rolesCtrl', require('controllers/role/rolesCtrl')).
		controller('addRoleCtrl', require('controllers/role/addRoleCtrl')).
		controller('editRoleCtrl', require('controllers/role/editRoleCtrl')).
    
        //Sale Controllers
        controller('salesCtrl', require('controllers/sale/salesCtrl')).
		controller('addSaleCtrl', require('controllers/sale/addSaleCtrl')).
		controller('editSaleCtrl', require('controllers/sale/editSaleCtrl')).
        
        //Season Controllers
        controller('seasonsCtrl', require('controllers/season/seasonsCtrl')).
		controller('addSeasonCtrl', require('controllers/season/addSeasonCtrl')).
		controller('editSeasonCtrl', require('controllers/season/editSeasonCtrl')).
       
        //Ship Controllers
        controller('shipsCtrl', require('controllers/ship/shipsCtrl')).
		controller('addShipCtrl', require('controllers/ship/addShipCtrl')).
		controller('editShipCtrl', require('controllers/ship/editShipCtrl')).
		
        //Specie Controllers
        controller('speciesCtrl', require('controllers/specie/speciesCtrl')).
		controller('addSpecieCtrl', require('controllers/specie/addSpecieCtrl')).
		controller('editSpecieCtrl', require('controllers/specie/editSpecieCtrl')).
        
        //Viaje Controllers
        controller('tripsCtrl', require('controllers/trip/tripsCtrl')).
		controller('addTripCtrl', require('controllers/trip/addTripCtrl')).
		controller('editTripCtrl', require('controllers/trip/editTripCtrl'));
    
		//controller('modalVerDireccionFacCtrl', require('controllers/pescador/modalVerDireccionFacCtrl')).
		//controller('modalVerDireccionEntCtrl', require('controllers/pescador/modalVerDireccionEntCtrl')).
		
		//controller('modalEditarDireccionFacCtrl', require('controllers/pescador/modalEditarDireccionFacCtrl')).
		//controller('modalEditarDireccionEntCtrl', require('controllers/pescador/modalEditarDireccionEntCtrl')).
		
		//controller('modalAgregarDireccionFacCtrl', require('controllers/pescador/modalAgregarDireccionFacCtrl')).
		//controller('modalAgregarDireccionEntCtrl', require('controllers/pescador/modalAgregarDireccionEntCtrl'));
});


