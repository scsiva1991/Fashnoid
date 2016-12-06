'use strict'; 

var fashnoid = angular.module('fashnoid', ['ngRoute', 'dynamicLayout' ]); 
fashnoid.config(['$routeProvider', function($routeProvider) {
  	console.log($routeProvider);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .when('/productDisplay', {
        templateUrl: 'views/product_post_list.html',
        controller: 'ProductDisplayCtrl'
      }) 
      .otherwise({
        redirectTo: '/'
      });
  }]);
