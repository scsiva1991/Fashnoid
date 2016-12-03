fashnoid.controller('MainCtrl', function($scope, $location, UserService) {
   console.log('--------');
   $scope.name="siva";
    console.log('------$scope --', $scope);

	$scope.user = {
		"isActive": false,
		"userType": "FASHION_FREEK",
		"emailVerified": false,
		"phoneVerified": false
	}

    $scope.signUp = function() {
		var result = UserService.signUp($scope.user);
		result.then(function(response) {  
 			console.log( ' response ',response);
			if( response.status == 200 ) {
				$('#login-signup').modal('toggle');
				$location.path('/productPrice');
			} else {
				alert(response.data.error.message);
			}
			 
	    });
		
	};
});