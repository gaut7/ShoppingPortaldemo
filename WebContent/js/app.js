'use strict';
var myApp = angular.module('myApp', ['ngStorage',
									 'ngRoute',
									 'ui.bootstrap'
                                     ]);

myApp.config(function($routeProvider) {
	
	  $routeProvider
	  .when("/home", {
		    templateUrl : "templates/home.html"
		  })
	  .when("/favourit", {
	    templateUrl : "templates/favourit_item.html"
	  })
	  .when("/login", {
	    templateUrl : "templates/login.html"
	  })
	  .when("/signup", {
	    templateUrl : "templates/signup.html"
	  })
	  .when("/store", {
	    templateUrl : "templates/store.html"
	  })
	  .when("/storeProduct", {
	    templateUrl : "templates/store_product.html"
	  })
	  
	  .otherwise({redirectTo : '/home'});
	});

	    
