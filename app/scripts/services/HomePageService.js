fashnoid.service('HomePageService', function($http, ApiConstants) { 

    this.signUp = function (user) {  
    	return $http.post(ApiConstants.BaseUrl+'user/signup', user).then(function successCallback(response) {
		     console.log('---- success response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error response ----', response);
		    return response;
		});
    };

    this.login = function (user) {  
    	return $http.post(ApiConstants.BaseUrl+'user/login', user).then(function successCallback(response) {
		     console.log('---- success login response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error login response ----', response);
		    return response;
		});
    };
});