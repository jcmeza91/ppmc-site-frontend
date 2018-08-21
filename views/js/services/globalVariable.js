/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var globalVariable = function ($window, $cookieStore) {
        
        return {               
 /*_________________save IdUsuario since Login___________-*/
		    getGlobalIdUsuario: function () {
                return $cookieStore.get('globalIdUsuario');
            },
			
            setGlobalIdUsuario: function(value) {
                $cookieStore.put("globalIdUsuario", value); 
            },
            
            removeGlobalIdUsuario: function() {
                $cookieStore.remove('globalIdUsuario');
            },
/*__________________________________________________*/	  
            
/*_________________Guarda los registros para ver y editar_____________*/
		    getIdItem: function () {
                return $cookieStore.get('idItem');
            },
			
            setIdItem: function(value) {
                $cookieStore.put("idItem", value); 
            },
            
            removeIdItem: function() {
                $cookieStore.remove('idItem');
            },
/*____________________________________________________________________*/
          
            isLoggedIn: function () {
                if($cookieStore.get('globalIdAdmin')) {
                    return true;
                }
                //redirect to login page if false
                window.location.href = '#/login';
                /*$state.transitionTo("login",{
										reload: true,
										inherit: false,
										notify: true});*/
            }
		}// end return
	}//end globalVariable

    globalVariable.$inject = ['$window', '$cookieStore'];
    return globalVariable;
});