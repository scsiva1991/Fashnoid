'use strict'; 

var fashnoid = angular.module('fashnoid', ['ngRoute']); 
fashnoid.config(['$routeProvider', function($routeProvider) {
  	console.log($routeProvider);
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/pdt', {
        templateUrl: 'views/view2.html',
        controller: 'PdtCtrl'
      }) 
      .otherwise({
        redirectTo: '/'
      });
  }]);
