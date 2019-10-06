'use strict';

window.myApp.directive('graphTemplate',['MANGO_MIRROR_CONSTANT',
        						'MANGO_MIRROR_CONSTANT_ERROR_MESSAGES',
        						function(MANGO_MIRROR_CONSTANT,MANGO_MIRROR_CONSTANT_ERROR_MESSAGES) 
        								{
    return{
        replace: true,
        template: '<div ng-include src="getTemplateUrl()"></div>', 
        link:function(scope,element,attributes){
           
        },
        controller: function($scope) {
          
        	$scope.widgetData = $scope.pageData1;
        	$scope.resizedData = $scope.resizedData; 
        	$scope.getTemplateUrl = function() 
        	{
              if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_CALENDAR)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.CALENDAR_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_CLOCK)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.CLOCK_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_WEATHER)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.WEATHER_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_TWITTER)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.TWITTER_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_24HOUR_WEATHER)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.WEATHER_24HOUR_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_5DAYS_WEATHER)
          	      {
            	  return   MANGO_MIRROR_CONSTANT.WEATHER_5DAYS_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_QUOTES)
            	  {
            	  return   MANGO_MIRROR_CONSTANT.QUOTES_TEMPLATE_URL;
            	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_STICKYNOTES)
	        	  {
	        	  return   MANGO_MIRROR_CONSTANT.STICKYNOTES_TEMPLATE_URL;
	        	  }
              else if ($scope.widgetData.widgetMasterCategory == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_NEWS)
        	  	  {
            	  return MANGO_MIRROR_CONSTANT.NEWS_TEMPLATE_URL;
        	  	  }
              else if ($scope.widgetData.contentType == MANGO_MIRROR_CONSTANT.WIDGET_TYPE_TRAFFIC)
	    	  	  {
	        	  return MANGO_MIRROR_CONSTANT.TRAFFIC_TEMPLATE_URL;
	    	  	  }
              else
            	  {
            	  return   MANGO_MIRROR_CONSTANT.HEALTHGRAPH_TEMPLATE_URL;
            	  }
        	}
        	
          }
        }
    }
]); 