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
      .when('/profileView', {
        templateUrl: 'views/profile_view.html',
        controller: 'ProfileViewCtrl'
      })
      .when('/viewcart', {
        templateUrl: 'views/view_cart.html',
        controller: 'CartCtrl'
      })
      .when('/myorders', {
        templateUrl: 'views/myorders.html',
        controller: 'CartCtrl'
      })
      .when('/trackOrder', {
        templateUrl: 'views/order_tracking.html',
        controller: 'OrderTrackCtrl'
      })
      .when('/productDetailView', {
        templateUrl: 'views/product_detail_view.html',
        controller: 'OrderTrackCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
fashnoid.constant('ApiConstants', {
    BaseUrl: 'http://localhost:8088/'
})
