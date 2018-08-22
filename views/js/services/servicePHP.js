define(['angular'], function (angular) {
    "use strict";

    var servicephp = function ($http, serviceAlert, $timeout, $q) {
        return {
            requestAPI: function(parameters, serviceName, method, msg) {	
                if(msg !== '')
				{
				    serviceAlert.loading(msg);
				}
			 
                var response = $http({	
                				cache: true,
                	 			method: method,
                                headers: {
                                    Authorization: "Basic UFBNQy1BUEk6UFBNQy1BUEk="
                                },
							    url: "http://127.0.0.1:3000/api/1/" + serviceName,
                                //url: "https://ppmctest2.appspot.com/api/1/" + serviceName,
                                data: parameters })
								.then(function (response){
									serviceAlert.hideloading();
                                    console.log(response);
                                    //console.log(response.status);
								    if (response.status==200){// 1 = success php service
                                        console.log("success");
								    }
								    else{ // 0 = error php service 
								        serviceAlert.showAlert(response.data.msg); }
								    return  response;	 
								}, function (reson){
								serviceAlert.hideloading();
								serviceAlert.showAlert("Error : No se puede conectar con el servidor");
								console.log(reson);
								return reson.data;
							});	
                return response;
		    }
        // end return
		}
		
    //end servicephp		
	}

    servicephp.$inject = ['$http','serviceAlert', '$timeout', '$q'];
    return servicephp;
});