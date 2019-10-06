
window.myApp
		.controller(
				'MainCtrl',
				[
						'$scope',
						'$rootScope',
						'$compile',
						'$location',
						'APIServices',
						'$localStorage',
						'ASSIGNMENT_CONSTANT',
						'ASSIGNMENT_CONSTANT_ERROR_MESSAGES',

						function($scope,$rootScope,$compile,$location,APIServices, $localStorage,
								ASSIGNMENT_CONSTANT,ASSIGNMENT_CONSTANT_ERROR_MESSAGES) {
							
							$scope.storeList = [];
							$scope.productList = [];
							$scope.storeProductList = [];
							$scope.userFavouritProductList = [];
							
							$rootScope.authenticated = false;
							$rootScope.authtoken = "";
							$scope.authToken = $localStorage.authtoken;
							$scope.name="";
							$scope.emailId="";
							$scope.password="";
							
							/*$localStorage.message = "Hello World";*/
							
							$scope.goToHome = function() {
								$location.path("/home");
							}
							
							$scope.redirectToSignup = function() {
								$location.path("/signup");
							}
							
							$scope.signUp = function() {
								 $scope.userSignupDetails = {
										 "name":$scope.name,
										 "email":$scope.emailId,
										 "password":$scope.password
								 }
								
								APIServices.signup($scope.userSignupDetails)
								.success(
										function(reply, status) {
											$localStorage.authtoken = reply.object.authtoken;
											$rootScope.authenticated = true;
											$rootScope.authtoken = reply.object.authtoken;
											$location.path("/home");
									   })
								.error(
										function(data,status)
										{
											if(data.message!=undefined)
											{
											$scope.toasterMessage(data.message);	
											}else
												{
												$scope.toasterMessage("Something went wrong");
												}
											
										})
							}
							
							$scope.signIn = function() {
								$scope.userLoginCredentials = {
										 "email":$scope.emailId,
										 "password":$scope.password
								 }
								APIServices.login($scope.userLoginCredentials)
								.success(
										function(reply, status) {
											$localStorage.authtoken = reply.object.authtoken;
											$rootScope.authenticated = true;
											$rootScope.authtoken = reply.object.authtoken;
											$location.path("/home");
									   })
								.error(
										function(data,status)
										{
											if(data.message!=undefined)
												{
												$scope.toasterMessage(data.message);	
												}else
													{
													$scope.toasterMessage("Something went wrong");
													}
											
										})
							}
							
							$scope.signout = function() {
								$localStorage.authtoken = "";
								$rootScope.authenticated = false;
								$rootScope.authtoken = "";
								$location.path("/home");
							}
							
							$scope.getStoreList = function() {
								
								APIServices.getStoreList()
								.success(
										function(reply, status) {
											$scope.storeList = reply.object;
									   })
								.error(
										function(data,status)
										{
											$scope.toasterMessage(data.error.message);
											
										})
							}
							$scope.getStoreList();
							
							$scope.getStoreProductList = function(storeDetail) {
								$scope.storeProductList = [];
								APIServices.getStoreProductList(storeDetail)
								.success(
										function(reply, status) {
											$scope.storeProductList = reply.object;
											$location.path("/storeProduct");
									   })
								.error(
										function(data,status)
										{
											$scope.toasterMessage(data.error.message);
											
										})
							}
							
							$scope.getProductList = function() {
								
								APIServices.getProductList()
								.success(
										function(reply, status) {
											$scope.productList = reply.object;
									   })
								.error(
										function(data,status)
										{
											$scope.toasterMessage(data.error.message);
										})
							}
							$scope.getProductList();
							
					
				// favourit item operations
							
							$scope.addProductToFavouritList = function(product) {
								if($rootScope.authenticated)
									{
									APIServices.addProductToFavouritList(product)
									.success(
											function(reply, status) {
												$scope.toasterMessage("Product Added Successfully");
										   })
									.error(
											function(data,status)
											{
												if(data.message!=undefined)
													{
													$scope.toasterMessage(data.message);	
													}else
														{
														$scope.toasterMessage("Something went wrong");
														}
											})
									}else
										{
										  $location.path("/login");
										}
							}
							
							$scope.getFavouritList = function() {
								if($rootScope.authenticated)
									{
									APIServices.getFavouritList()
									.success(
											function(reply, status) {
												$scope.userFavouritProductList = reply.object;
										   })
									.error(
											function(data,status)
											{
												if(data.message!=undefined)
													{
													$scope.toasterMessage(data.message);	
													}else
														{
														$scope.toasterMessage("Something went wrong");
														}
											})
									}else
										{
										  $location.path("/login");
										}
							}
							
							
							$scope.removeProductFromFavourit = function(product) {
								if($rootScope.authenticated)
									{
									APIServices.removeProductFromFavourit(product)
									.success(
											function(reply, status) {
												$scope.getFavouritList();
												$scope.toasterMessage("Removed Product from favourit list");
										   })
									.error(
											function(data,status)
											{
												if(data.message!=undefined)
													{
													$scope.toasterMessage(data.message);	
													}else
														{
														$scope.toasterMessage("Something went wrong");
														}
											})
									}else
										{
										  $location.path("/login");
										}
							}
					
							
							/*
							 * ========================pop up toaster if any
							 * error message need to
							 * show====================
							 */

						$scope.toasterMessage = function(message) {
							window.toastr.error(message, "", {
								"timeOut" : "3000",
								"extendedTImeout" : "3000"
							});
						}	
														
						} ]);
