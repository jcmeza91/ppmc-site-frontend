/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var servicecamera = function ($q) {
 
        return {
          
         getPicture: function(st) {
			 
			 
			  var options = {					
							quality: 75,
							//destinationType: Camera.DestinationType.DATA_URL,
							//sourceType: Camera.PictureSourceType.CAMERA,
							allowEdit: true,
							//encodingType: Camera.EncodingType.JPEG,
							targetWidth: 250,
							targetHeight: 250,
							popoverOptions: CameraPopoverOptions,
							//saveToPhotoAlbum: true,
							correctOrientation:true,
							sourceType: st
							};
							
					var q = $q.defer();
					
					navigator.camera.getPicture(function(result) {
												q.resolve(result);
					}, 
					
					function(err) {
									q.reject(err);
									}, options);
         return q.promise
		}		
   
		     
		   
		}// end return
		
		
	}//end servicephp

    servicecamera.$inject = ['$q'];
    return servicecamera;
});