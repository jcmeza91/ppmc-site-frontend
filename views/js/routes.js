'use strict';

define(['app'], function (app) {
    return app.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
    	
    	 $locationProvider.hashPrefix(""); //Navigation, For Browsers does not support HTML5
    	 
        /*Login View
        $routeProvider.when('/login', {
            templateUrl: 'templates/login/login.html',
            controller: 'loginCtrl'});*/
        
        //Home View
        $routeProvider.when('/home', {
            templateUrl: 'templates/home/home.html',
            controller: 'homeCtrl'});
        
        //Client Views
        $routeProvider.when('/clientes', {
            templateUrl: 'templates/client/clients.html',
            controller: 'clientsCtrl'});
        
        $routeProvider.when('/cliente', {
            templateUrl: 'templates/client/addClient.html',
            controller: 'addClientCtrl'});
        
        $routeProvider.when('/editarCliente', {
            templateUrl: 'templates/client/editClient.html',
            controller: 'editClientCtrl'});
        
        //Crew Views
        $routeProvider.when('/tripulaciones', {
            templateUrl: 'templates/crew/crew.html',
            controller: 'crewCtrl'});
        
        $routeProvider.when('/tripulacion', {
            templateUrl: 'templates/crew/addCrew.html',
            controller: 'addCrewCtrl'});
        
        $routeProvider.when('/editarTripulacion', {
            templateUrl: 'templates/crew/editCrew.html',
            controller: 'editCrewCtrl'});
        
        $routeProvider.when('/asignarTripulacion', {
            templateUrl: 'templates/crew/assigneCrew.html',
            controller: 'assigneCrewCtrl'});
        
        //Employee Views
        $routeProvider.when('/empleados', {
            templateUrl: 'templates/employee/employees.html',
            controller: 'employeesCtrl'});
        
        $routeProvider.when('/empleado', {
            templateUrl: 'templates/employee/addEmployee.html',
            controller: 'addEmployeeCtrl'});
        
        $routeProvider.when('/editarEmpleado', {
            templateUrl: 'templates/employee/editEmployee.html',
            controller: 'editEmployeeCtrl'});
        
        //Inventory Views
        $routeProvider.when('/inventarios', {
            templateUrl: 'templates/inventory/inventories.html',
            controller: 'inventoriesCtrl'});
        
        $routeProvider.when('/inventario', {
            templateUrl: 'templates/inventory/addInventory.html',
            controller: 'addInventoryCtrl'});
        
        $routeProvider.when('/editarInventario', {
            templateUrl: 'templates/inventory/editInventory.html',
            controller: 'editInventoryCtrl'});
        
        $routeProvider.when('/inventarioDetalle', {
            templateUrl: 'templates/inventory/inventoryDetail.html',
            controller: 'detailInventoryCtrl'});
        
        //Inventory Detail Views
        $routeProvider.when('/detalleInventarios', {
            templateUrl: 'templates/inventoryDetail/inventoryDetail.html',
            controller: 'inventoryDetailCtrl'});
        
        $routeProvider.when('/detalleInventario', {
            templateUrl: 'templates/inventoryDetail/addInventoryDetail.html',
            controller: 'addInventoryDetailCtrl'});
        
        $routeProvider.when('/editarDetalleInventario', {
            templateUrl: 'templates/inventoryDetail/editInventoryDetail.html',
            controller: 'editInventoryDetailCtrl'});
        
        //Price Views
        $routeProvider.when('/precios', {
            templateUrl: 'templates/price/prices.html',
            controller: 'pricesCtrl'});
        
        $routeProvider.when('/precio', {
            templateUrl: 'templates/price/addPrice.html',
            controller: 'addPriceCtrl'});
        
        $routeProvider.when('/editarPrecio', {
            templateUrl: 'templates/price/editPrice.html',
            controller: 'editPriceCtrl'});
        
        //Return Views
        $routeProvider.when('/devoluciones', {
            templateUrl: 'templates/return/returns.html',
            controller: 'returnsCtrl'});
        
        $routeProvider.when('/devolucion', {
            templateUrl: 'templates/return/addReturn.html',
            controller: 'addReturnCtrl'});
        
        $routeProvider.when('/editarDevolucion', {
            templateUrl: 'templates/return/editReturn.html',
            controller: 'editReturnCtrl'});
        
        //Role Views
        $routeProvider.when('/roles', {
            templateUrl: 'templates/role/roles.html',
            controller: 'rolesCtrl'});
        
        $routeProvider.when('/rol', {
            templateUrl: 'templates/role/addRole.html',
            controller: 'addRoleCtrl'});
        
        $routeProvider.when('/editarRol', {
            templateUrl: 'templates/role/editRole.html',
            controller: 'editRoleCtrl'});
        
        //Sale Views
        $routeProvider.when('/ventas', {
            templateUrl: 'templates/sale/sales.html',
            controller: 'salesCtrl'});
        
        $routeProvider.when('/venta', {
            templateUrl: 'templates/sale/addSale.html',
            controller: 'addSaleCtrl'});
        
        $routeProvider.when('/editarVenta', {
            templateUrl: 'templates/sale/editSale.html',
            controller: 'editSaleCtrl'});
        
        //Season Views
        $routeProvider.when('/temporadas', {
            templateUrl: 'templates/season/seasons.html',
            controller: 'seasonsCtrl'});
        
        $routeProvider.when('/temporada', {
            templateUrl: 'templates/season/addSeason.html',
            controller: 'addSeasonCtrl'});
        
        $routeProvider.when('/editarTemporada', {
            templateUrl: 'templates/season/editSeason.html',
            controller: 'editSeasonCtrl'});
        
        //Ship Views
        $routeProvider.when('/barcos', {
            templateUrl: 'templates/ship/ships.html',
            controller: 'shipsCtrl'});
        
        $routeProvider.when('/barco', {
            templateUrl: 'templates/ship/addShip.html',
            controller: 'addShipCtrl'});
        
        $routeProvider.when('/editarBarco', {
            templateUrl: 'templates/ship/editShip.html',
            controller: 'editShipCtrl'});
        
        //Specie Views
        $routeProvider.when('/especies', {
            templateUrl: 'templates/specie/species.html',
            controller: 'speciesCtrl'});
        
        $routeProvider.when('/especie', {
            templateUrl: 'templates/specie/addSpecie.html',
            controller: 'addSpecieCtrl'});
        
        $routeProvider.when('/editarEspecie', {
            templateUrl: 'templates/specie/editSpecie.html',
            controller: 'editSpecieCtrl'});
        
        //Trip Views
        $routeProvider.when('/viajes', {
            templateUrl: 'templates/trip/trips.html',
            controller: 'tripsCtrl'});
        
        $routeProvider.when('/viaje', {
            templateUrl: 'templates/trip/addTrip.html',
            controller: 'addTripCtrl'});
        
        $routeProvider.when('/editarViaje', {
            templateUrl: 'templates/trip/editTrip.html',
            controller: 'editTripCtrl'});
        
        //Other Views
        $routeProvider.otherwise(
            {redirectTo: '/home'});
    
    }]);
});
