fashnoid.controller('ProductDisplayCtrl', function($scope, $location, ProductService, $rootScope ) {
console.log('----  $rootScope----',  $rootScope); 
   $scope.user = $rootScope.user;
  // $scope.productList = ProductService.getAllProducts();

   /*$scope.productList.then(function(response) {  
		console.log( ' response ',response);
		var pdtList = [];
	    for( var i = 0; i < response.data.length; i++) {
	    	var obj = {}; 
	    	obj.id = i;
	    	if(i % 2 == 0)
	    		obj.template = "views/product_card.html";
	    	else
	    		obj.template = "views/post_card.html";

	    	var data = {};
	    	data.productName = response.data[i].productName;
	    	data.userName = $scope.user.firstName;
	    	
	    	obj.data = data;

	    	pdtList.push(obj);

	    }
	     
	    $scope.cards = pdtList;
		 
    });*/
  // console.log('----$scope.cards----', $scope.cards); 
   	
});