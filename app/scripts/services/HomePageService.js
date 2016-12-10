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

   
});