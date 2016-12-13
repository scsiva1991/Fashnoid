fashnoid.controller('CartCtrl', function($scope, $location, UserService, $rootScope) {
   
	$scope.user = $rootScope.user;
    if($rootScope.user != null ) {
    	$scope.cartItems = UserService.getCartItems($rootScope.user.userId);
    }
    $scope.cartItems.then(function(response) {
		if(response.status == 200 ) {
			$scope.cartItems = response.data;
		} else {
			$scope.cartItems = [];
		}
		console.log('Carts ', $scope.cartItems);
	});
});