fashnoid.controller('ProfessionalCtl', function($scope, $location, UserService, $rootScope, $routeParams) {
   
	var profssType = $routeParams.professionalType;
	console.log("user type ---,", profssType);
	if(profssType != undefined && profssType != null) {
		var userType = 'FASHION_PHOTOGRAPHER';
		if(profssType == 'stylish') {
			userType = 'FASHION_STYLIST';
		} else if(profssType == 'designer') {
			userType = 'FASHION_DESIGNER';
		}else if(profssType == 'blogger') {
			userType = 'FASHION_BLOGGER';
		} 
		$scope.professionals = UserService.getProfessionals(userType, 10, 0);
		$scope.professionals.then(function(response) { 
			console.log( ' response ',response);
			if( response.status == 200 ) {
				
			} else {
				alert('Getting professionals detail error ...');
			}
			 
	    });
	} else {
		var redirectPath = '/homhomepage';
		if($scope.user != null)
			redirectPath = '/';
		$location.path(redirectPath);
		
	}

});