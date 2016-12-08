'use strict'; 

var fashnoid = angular.module('fashnoid', ['ngRoute', 'dynamicLayout' ]); 
fashnoid.config(['$routeProvider', function($routeProvider) {
  	console.log($routeProvider);
    $routeProvider
      .when('/', {
        templateUrl: 'views/landing.html',
        controller: 'MainCtrl'
      })
      .when('/productDisplay', {
        templateUrl: 'views/product_post_list.html',
        controller: 'ProductDisplayCtrl'
      }) 
      .when('/homepage', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
fashnoid.constant('ApiConstants', {
    BaseUrl: 'http://localhost:8088/'
})
