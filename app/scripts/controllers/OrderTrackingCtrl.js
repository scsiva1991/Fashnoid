fashnoid.controller('OrderTrackCtrl', function($scope, $location, HomePageService, $rootScope) {
   
	$scope.user = $rootScope.user;
    $scope.signUp = function() {
		var result = UserService.signUp($scope.user);
		result.then(function(response) {  
 			console.log( ' response ',response);
			if( response.status == 200 ) {
				$('#login-signup').modal('toggle');
				$location.path('/productDisplay');
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
				$location.path('/productDisplay');
			} else {
				console.log("login failed");
				alert("Username / password mismatch !!! ");
			}
			 
	    });
		
	};
});