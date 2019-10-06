'use strict';

window.myApp.factory('APIServices', [ '$http', '$localStorage','$rootScope', 'ASSIGNMENT_CONSTANT',
		function($http,$localStorage,$rootScope, ASSIGNMENT_CONSTANT) {

			var assignmentAPI = {};
			
			// get product list
			assignmentAPI.getProductList = function() {
				return $http.get(ASSIGNMENT_CONSTANT.productBaseUrl);
			};
			
			// get store list
			assignmentAPI.getStoreList = function() {
				return $http.get(ASSIGNMENT_CONSTANT.storeListUrl);
			};
			
			// get login
			assignmentAPI.login = function(userCredentials) {
				console.log("login API called");
				return $http.post(ASSIGNMENT_CONSTANT.loginUrl,userCredentials);
			};
			
			// get register
			assignmentAPI.signup = function(userDetails) {
				console.log("user register API called");
				return $http.post(ASSIGNMENT_CONSTANT.signUpUrl,userDetails);
			};
			
			//get logout
			assignmentAPI.logout = function() {
				console.log("logout API called");
				return $http.get(ASSIGNMENT_CONSTANT.logoutUrl);
			};
			
			// get product list by store
			assignmentAPI.getStoreProductList = function(storeDetail) {
				return $http.get(ASSIGNMENT_CONSTANT.storeProductListUrl+"/"+storeDetail.id);
			};
			
			// add to favourit
			assignmentAPI.addProductToFavouritList = function(product) {
				var config = {
		                headers : {
		                	'authtoken': $rootScope.authtoken,
		                	'content-type':'application/json'
		                }
		            }
				return $http.post(ASSIGNMENT_CONSTANT.productFavouritUrl,product,config);
			};
			
			
			// show all favourit
			assignmentAPI.getFavouritList = function() {
				var config = {
		                headers : {
		                	'authtoken': $rootScope.authtoken,
		                	'content-type':'application/json'
		                }
		            }
				return $http.get(ASSIGNMENT_CONSTANT.productFavouritUrl,config);
			};
			
			// remove from favourit
			assignmentAPI.removeProductFromFavourit = function(product) {
				var config = {
		                headers : {
		                	'authtoken': $rootScope.authtoken,
		                	'content-type':'application/json'
		                }
		            }

			return $http.delete(ASSIGNMENT_CONSTANT.productFavouritUrl+"/"+product.id,config);
		};
			
			// need to modify below urls
			
/*			
			
			
			// get remove from favourit
			assignmentAPI.getProductList = function() {
				console.log("store API called");
				return ASSIGNMENT_CONSTANT.storeListUrl;
			};

			// get all favourit items
			assignmentAPI.getProductList = function() {
				console.log("store API called");
				return ASSIGNMENT_CONSTANT.storeListUrl;
			};
			
			// product search
			assignmentAPI.getProductList = function() {
				console.log("login API called");
				return $http.get(ASSIGNMENT_CONSTANT.productBaseUrl);
			};*/
			
			return assignmentAPI;
		} ]);
