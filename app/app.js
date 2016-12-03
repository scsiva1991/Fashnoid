'use strict'; 

var fashnoid = angular.module('fashnoid', ['ngRoute']); 
fashnoid.config(['$routeProvider', function($routeProvider) {
  	console.log($routeProvider);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/productPrice', {
        templateUrl: 'views/productPrice.html',
        controller: 'ProductPriceCtrl'
      }) 
      .otherwise({
        redirectTo: '/'
      });
  }]);
