'use strict';

define(function () {
    return ['$scope', 'appVersion', 'servicePHP', 'globalVariable','$q', function ($scope, appVersion, servicePHP, globalVariable, $q) {
        $scope.idUsuario=globalVariable.getGlobalIdUsuario();
        $scope.clickLogin = function(datosFormulariologin) {
            //IF LOGIN API AVAILABLE
            /*var parameters={  usuario: datosFormulariologin.usuario, 
                                contrasena: datosFormulariologin.password        				 
            };

            servicePHP.requestAPI(parameters,"login","Estamos validando tus datos").then(function(response){
                menu();
				globalVariable.setGlobalIdUsuario(response.idUsuario);
				window.location.href = '#/pescadores';				
			    }).catch(function (err) {// handle errors here if needed
			    });	*/

            menu();
            globalVariable.setGlobalIdUsuario("1");
            window.location.href = '#/home';
   	 	}
    }];   
});

var menu = function() { 
    $('#header').html(        
        '<div class="jumbotron" style="background-color: #2196f3;">' +
            '<h3>PPMC</h3>' +
        '</div>'
    )
    
    /*$('#menu').html( 
        '<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">' +
            '<a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#/pescador" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>' +
            '<a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#/pescadores" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>' +
            '<a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#/editarPe" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>' +
            '<a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>' +
        '</div>' 
    )*/
}


