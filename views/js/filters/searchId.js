/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var filterSearchId = function () {
        
		/*__________________________________________________*/
		return function (items, query) {
			if (items!==undefined && items!==null ){
			
			var filtered = [];
			var letterMatch = new RegExp(query, 'i');
				
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
						if (query) {
							if (letterMatch.test(item.id.substring(0, query.length)) || 
                               item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || 
                               item.total.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                               item.date.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
                               letterMatch.test(item.number.toString().substring(0, query.length))) {
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

    filterSearchId.$inject = [];
    return filterSearchId;
});