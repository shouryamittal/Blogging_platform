var app=angular.module('App',['ui.router','textAngular']);

app.config(function($stateProvider,$urlRouterProvider,$locationProvider){
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

app.controller('loginController',function($scope,$state,$http,$rootScope){
    var loggedIn=false;
    console.log($rootScope.loggedIn);
	$scope.showEditor=function(){
        if($scope.user_email)
        {
            $http({
            method:'POST',
            url:'https://blogapi.shuttlescrap.com/register/login',
            data:{
                user_email:$scope.user_email,
                user_password:$scope.user_password
                }
            }).then((res)=>{
            if($scope.user_password==res.data)
            {
                $state.go('post');
                $rootScope.loggedIn=true;
            }
            else
            {
                alert("Invalid Email-id or Password");
                $scope.user_email=null;
                $scope.user_password=null;
            }
            
        })
        }
        
	}
});


 app.controller('confirmController',function($scope,$http,$state,$rootScope){
    console.log($rootScope.loggedIn);
    if($rootScope.loggedIn==true)
    {
        
    	    $scope.shuttleScrap_confirm=function(){
    		var shuttlescrap_check=false;

            if($scope.htmlcontenttwo)
            {
        		shuttlescrap_check=confirm('Are you sure you want to post??');
        		if(shuttlescrap_check==true)
        		{
        			console.log($scope.htmlcontenttwo);
                    $http({
                        method:'POST',
                        url:'https://blogapi.shuttlescrap.com/register/post',
                        data:{
                            user_post:$scope.htmlcontenttwo
                        }
                    }).then((res)=>{
                        $scope.htmlcontenttwo=null;
                        alert(res.data);
                        
                    })

        		}
            }
            else
            {
                alert("Please write Something to post!");
            }
        }

    	/*$scope.bloodport_confirm=function(){
    		var bloodport_check=false;
        if($scope.htmlcontenttwo)
            {
        		bloodport_check=confirm('Are you sure you want to post');
        		if(bloodport_check==true)
        		{
        			console.log($scope.htmlcontenttwo);
                    $http({
                        method:'POST',
                        url:'https://blog_api.shuttlescrap.com/register/post',
                        data:{
                            user_post:$scope.htmlcontenttwo
                        }
                    }).then((res)=>{
                        $scope.htmlcontenttwo=null;
                        alert(res.data);
                        
                    })
        		}
        		else
        		{
        			alert('Please write Something to post');
        		}
            }
    	}*/

    	/*$scope.facebook_confirm=function(){
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
    	}*/

         $scope.logOut=function(){
             $rootScope.loggedIn=false;
             $state.go('login');
        }
     }

     else
     {
         $state.go('login');
        console.log("Hello");
     }
    });
