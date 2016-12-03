fashnoid.service('UserService', function($http) { 

    this.signUp = function (user) {  
    	return $http.post('http://35.154.25.44:8088/user/signup', user).then(function successCallback(response) {
		     console.log('---- success response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error response ----', response);
		    return response;
		});
    };
});