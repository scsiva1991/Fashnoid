fashnoid.service('UserService', function($http, ApiConstants) { 

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

    this.getProfessionals = function(userType, limit, offset) {
    	return $http.post(ApiConstants.BaseUrl+'user/getProfessionals/'+userType+'/'+limit+'/'+ offset).then(function successCallback(response) {
		     console.log('---- success login response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error login response ----', response);
		    return response;
		});
    }

    this.getClosetItems = function(userId, limit, offset) {
    	return $http.post(ApiConstants.BaseUrl+'closet/getByUser/'+userId).then(function successCallback(response) {
		     console.log('---- success login response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error login response ----', response);
		    return response;
		});
    }

    this.getCartItems = function(userId) {
    	return $http.get(ApiConstants.BaseUrl+'cartItem/getCarts/'+userId).then(function successCallback(response) {
		     console.log('---- success login response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error login response ----', response);
		    return response;
		});
    }
});