fashnoid.service('HomePageService', function($http, ApiConstants) { 

    this.getMostLikedItems = function() {
    	return $http.get(ApiConstants.BaseUrl+'homePage/getLayoutProducts').then(function successCallback(response) {
		     console.log('---- success response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error response ----', response);
		    return response;
		});
    };

    this.getCartCounts = function(userId) {
    	return $http.get(ApiConstants.BaseUrl+'cartItem/getCartItems/'+userId).then(function successCallback(response) {
		     return response;
		  }, function errorCallback(response) {
		    return response;
		});
    };

   
});