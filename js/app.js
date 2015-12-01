//Initiate the angular module
var dropitApp = angular.module("dropitApp", [
		"ngRoute",
		"dropitControllers"
]);

dropitApp.config(["$routeProvider",
		function($routeProvider){
			$routeProvider.
				when("/", {
					templateUrl : "partials/main.html",
					controller : "MainCtrl"
				}).
				when("/marks", {
					templateUrl : "partials/marks.html",
					controller : "MarksCtrl"
				}).
				when("/coffee", {
					templateUrl : "partials/coffee.html",
					controller : "CoffeeCtrl"
				}).
				when("/chill", {
					templateUrl : "partials/chill.html",
					controller : "ChillCtrl"
				});
		}
]);
