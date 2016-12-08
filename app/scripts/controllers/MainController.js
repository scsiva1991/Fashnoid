fashnoid.controller('MainCtrl', function($scope, $location, UserService, $rootScope) {
   
	$scope.user = {
		"isActive": false,
		"userType": "FASHION_FREEK",
		"emailVerified": false,
		"phoneVerified": false
	}

	$scope.$on('$viewContentLoaded', function() {
    //call it here
    console.log("Came initial load");
	});

    $scope.signUp = function() {
		var result = UserService.signUp($scope.user);
		result.then(function(response) {  
 			console.log( ' response ',response);
			if( response.status == 200 ) {
				$('#login-signup').modal('toggle');
				$location.path('/homepage');
				$rootScope.user = response.data;
			} else {
				alert(response.data.error.message);
			}
			 
	    });
		
	};

	$scope.login = function() {
		var result = UserService.login($scope.user);
		result.then(function(response) {  
 			console.log( ' response ',response);
			if( response.status == 200 ) {
				$('#login-signup').modal('toggle');
				$rootScope.user = response.data;
				$location.path('/homepage');
			} else {
				console.log("login failed");
				alert("Username / password mismatch !!! ");
			}
			 
	    });
		
	};
});