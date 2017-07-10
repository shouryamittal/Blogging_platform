var app=angular.module('App',['ui.router','textAngular']);
app.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.otherwise("/login");
	$stateProvider
	.state('login',{
		url:"/login",
		templateUrl:"loginForm.html",
		controller:'loginController'
	})
	.state('post',{
		url:'/post',
		templateUrl:'blogPage.html',
		controller:'confirmController'
	});
});
app.controller('loginController',function($scope,$state){
	$scope.showEditor=function(){
		$state.go('post');
		
	}
});


 app.controller('confirmController',function($scope){
    	$scope.shuttleScrap_confirm=function(){
    		var shuttlescrap_check=false;
    		shuttlescrap_check=confirm('Are you sure you want to post??');
    		if(shuttlescrap_check==true)
    		{
    			console.log($scope.htmlcontenttwo);
    		}
    		else
    		{
    			alert('no');
    		}
    	}

    	$scope.bloodport_confirm=function(){
    		var bloodport_check=false;
    		bloodport_check=confirm('Are you sure you want to post');
    		if(bloodport_check==true)
    		{
    			alert('yes');
    			document.getElementById("preview").innerHTML="";
    		}
    		else
    		{
    			alert('no');
    		}
    	}

    	$scope.facebook_confirm=function(){
    		var fb_check=false;
    		fb_check=confirm('Are you sure you want to post');
    		if(fb==true)
    		{
    			alert('yes');
    			document.getElementById("preview").innerHTML="";
    		}
    		else
    		{
    			alert('no');
    		}
    	}
    })