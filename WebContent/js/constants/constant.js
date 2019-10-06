
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
	
	ERROR_NEWS_SOURCE :"There is some issue while fetching news data for ",
	ERROR_WIDGETSETTING_DETAIL :"There is some issue while loading WidgetSetting Detail on portal ",
	ERROR_OPEN_SOCKETCONNECTION_ERROR :"There is some issue while opening socket connection mirror where ",
	ERROR_WRONG_MAJOR_MINOR_MESSAGE :"Portal got hit by wrong major,minor value where",
	ERROR_WRONG_URL_MESSAGE :"Some parameter missing in URL while initializing mirror. Mac-Address of that mirror is ",
	ERROR_NEWS_APICALL_MESSAGE :"Api called to fetch news data",
	ERROR_GOOGLE_PHOTO_APICALL_MESSAGE:"The provided Google Album ID does not match any albums",
	ERROR_APPLE_PHOTO_APICALL_MESSAGE:"Provided link not valid",
	
	
});
