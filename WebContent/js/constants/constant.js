
var ApiServerUrl = "http://localhost:8080/";

window.myApp.constant('ASSIGNMENT_CONSTANT', {
	
	// all store related url
	storeListUrl : ApiServerUrl + "stores",
	storeProductListUrl : ApiServerUrl + "stores/products/",
	
	//all product related URL
	productSerachUrl : ApiServerUrl + "product/search",
	productBaseUrl : ApiServerUrl + "product",
	productFavouritUrl : ApiServerUrl + "product/favourit",
	
	
	// user related url
	loginUrl : ApiServerUrl + "user/login",
	logoutUrl : ApiServerUrl + "user/logout",
	signUpUrl : ApiServerUrl + "user/registration",

	REGISTER_TEMPLATE_URL :"templates/register.html",	
	LOGIN_TEMPLATE_URL :"templates/login.html",
	HOME_TEMPLATE_URL :"templates/home.html",
	FAVOURIT_ITEM_TEMPLATE_URL :"templates/dailyPrediction.html",
			
});


window.myApp.constant('ASSIGNMENT_CONSTANT_ERROR_MESSAGES', {
	
SOMETHING_FAILED :"Something went wrong",
	
	
});
