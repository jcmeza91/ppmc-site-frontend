/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var filterSearchP = function () {
        
		/*__________________________________________________*/
		return function (items, query) {
			if (items!==undefined && items!==null ){
			
			var filtered = [];
			//var letterMatch = new RegExp(query, 'i');
				
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
						if (query) {
                            if(item.productName.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
							//if (letterMatch.test(item.productName.substring(0, query.length))) {
								filtered.push(item);
								}
						}
						else {
							filtered.push(item);
							}
							}
						return filtered;
						};
			}
		/*__________________________________________________*/	

		
    }; 

    filterSearchP.$inject = [];
    return filterSearchP;
});