fashnoid.service('ProductService', function($http) { 

    this.getAllProducts = function () {  
    	return $http.get('http://35.154.25.44:8088/product/getall').then(function successCallback(response) {
		     console.log('---- success pdt response ----', response);
		     return response;
		  }, function errorCallback(response) {
		    console.log('---- error pdt response ----', response);
		    return response;
		});
    }; 
});