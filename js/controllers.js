var dropitControllers = angular.module("dropitControllers", []);
dropitControllers.controller("MainCtrl", function(
			$scope,
			$rootScope,
			$http,
			$location) {
	$scope.open_calculator = function(){
		$location.path("/marks/");
	}
	$scope.open_coffee = function(){
		$location.path("/coffee/");
	}
	$scope.open_chill = function(){
		$location.path("/chill/");
	}
	$scope.icons =
		{
			calc: 'calc_wsh',
			coffee: 'coffee_wsh',
			chair: 'chair_wsh',
			phrase: '______________',
			class: '',
			netflix: ''
		}
	$scope.calcchange = function(){
		if ($scope.icons.calc = 'calc_wsh'){
			$scope.icons.calc='calc';
			$scope.icons.phrase="pass this course";
			$scope.icons.class='yellow';
		}
	}
	$scope.calcback = function(){
		if ($scope.icons.calc = 'calc'){
			$scope.icons.calc='calc_wsh';
			$scope.icons.phrase='______________';
			$scope.icons.class='';
		}
	}
	$scope.coffeechange = function(){
		if ($scope.icons.coffee = 'coffee_wsh'){
			$scope.icons.coffee='coffee';
			$scope.icons.phrase="stay awake";
			$scope.icons.class='blue';
		}
	}
	$scope.coffeeback = function(){
		if ($scope.icons.coffee = 'coffee'){
			$scope.icons.coffee='coffee_wsh';
			$scope.icons.phrase='______________'
			$scope.icons.class='';
		}
	}
	$scope.chairchange = function(){
		if ($scope.icons.chair = 'chair_wsh'){
			$scope.icons.chair='chair';
			$scope.icons.phrase=" chill";
			$scope.icons.netflix="Netflix &"
			$scope.icons.class='orange';
		}
	}
	$scope.chairback = function(){
		if ($scope.icons.chair = 'chair'){
			$scope.icons.chair='chair_wsh';
			$scope.icons.phrase='______________'
			$scope.icons.netflix=''
			$scope.icons.class='';
		}
	}
});

dropitControllers.controller("MarksCtrl", function(
			$scope,
			$rootScope,
			$http,
			$location) {
	$scope.goal_mark = 50;
	$scope.assessments = [
		{
			name : "Quiz",
			grade : 80,
			weight: 10,
		},
		{
			name : "Assignment",
			grade : 75,
			weight: 15,
		},
		{
			name : "Midterm",
			grade : 70,
			weight: 30,
		},
	];
	$scope.add_assessment = function(){

		$scope.assessments.push({
			name : "new assessment",
			grade : 75,
			weight : 10,
		});
	}
	$scope.remove_assessment = function(assessment){
		if (assessment == undefined){
			$scope.assessments.pop();
		} else {
			var index = $scope.assessments.indexOf(assessment);
			$scope.assessments.splice(index, 1);
		}
	}
	$scope.update = function(){

		var total_weight = 0;
		var current_score = 0;
		angular.forEach($scope.assessments, function(assessment){
			current_score += assessment.grade * (assessment.weight/100.0);
			total_weight += assessment.weight
		});

		// Error checking
		if (total_weight >= 100){
			$scope.error = "Your total weight is over 100";
		} else if (total_weight < 0){
			$scope.error = "Your total weight is negative";
		} else {
			$scope.error = false;
		}

		$scope.total_weight = total_weight;
		$scope.current_mark = (current_score / total_weight) * 100
		$rootScope.current_mark = (current_score / total_weight) * 100
		$scope.final_mark = (($scope.goal_mark) - current_score)/((100 - $scope.total_weight)/100)

		if ($scope.final_mark >= 100){
			$scope.dropit = true;
		} else {
			$scope.dropit = false;
		}
		if ($scope.final_mark <= 0){
			$scope.acedit = true;
		} else {
			$scope.acedit = false;
		}
	}
	$scope.update();
});

dropitControllers.controller("CoffeeCtrl", function(
			$scope,
			$rootScope,
			$http,
			$location) {
	$scope.update = function(){
		ratio = $scope.desired_mark / $scope.current_mark
		$scope.required = Math.ceil(Math.max(1, $scope.current_coffees * ratio));
	}
	$scope.update();
});

dropitControllers.controller("ChillCtrl", function(
			$scope,
			$rootScope,
			$http,
			$location) {
});
