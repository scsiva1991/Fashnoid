fashnoid.controller('MainCtrl', function($scope, $location, UserService, HomePageService, $rootScope) {
   
	$scope.user = {
		"isActive": false,
		"userType": "FASHION_FREEK",
		"emailVerified": false,
		"phoneVerified": false
	}

	$scope.mostLikedItems = HomePageService.getMostLikedItems();
	$scope.mostLikedItems.then(function(response) { 
		if(response.status == 200 ) {
			//var bbbbb = JSON.parse(response);
			var items = [];
			for( var i = 0; i < response.data.posts.length; i++) {
		    	var data = {};
		    	data.type = 'post';
		    	data.description = response.data.posts[i].description;
		    	data.comments = response.data.posts[i].comments;
		    	data.commentCount = response.data.posts[i].comments.length;
		    	data.likeCount = response.data.posts[i].likes.length;
		    	var userObj = JSON.parse(response.data.posts[i].ownerId);
		    	console.log('User information ---- ',userObj);
		    	var user = {};
		    	user.profile = userObj.imageUrl;
		    	user.fullName = userObj.firstName +' '+userObj.lastName;
		    	data.owner = user;
		    	data.image = (response.data.posts[i].images.length > 0 ? response.data.posts[i].images[0].image : 'static/images/dr3.jpg');
		    	items.push(data);
	    	}
	    	var products = [];
	    	for(var i = 0; i < response.data.products.length; i++) {
		    	var data = {};
		    	//data = response.data.products[i];
		    	data.type = 'product';
		    	var brand = JSON.parse(response.data.products[i].brandId);
				var category = JSON.parse(response.data.products[i].categoryId);
				data.hasSpecialOffer = response.data.products[i].hasSpecialOffer;	
				data.images = response.data.products[i].images;
				data.filters = response.data.products[i].mandatoryAttrs;
				data.attributes = response.data.products[i].recommentedAttrs;
				data.specialDiscount = response.data.products[i].specialDiscount;
				data.productName = response.data.products[i].productName;
		    	data.description = response.data.products[i].description;
		    	data.likes = response.data.products[i].likes;
		    	data.likeCount = response.data.products[i].likes.length;
		    	var userObj = JSON.parse(response.data.products[i].sellerId);
		    	console.log('User information ---- ',userObj);
		    	var user = {};
		    	user.profile = userObj.imageUrl;
		    	user.fullName = userObj.firstName +' '+userObj.lastName;
		    	data.owner = user;
		    	data.price = response.data.products[i].price;
		    	data.offerAmount = response.data.products[i].offerAmount;
		    	data.originalAmount = response.data.products[i].mrpPrice;
		    	data.offerPercentage = (response.data.products[i].offerAmount /response.data.products[i].mrpPrice ) * 100;
		    	data.images = [];
		    	products.push(data);

	    	}
	    	$scope.cards = items;
	    	$scope.products = products;
		} else {
			console.log('Error');
		}
		
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