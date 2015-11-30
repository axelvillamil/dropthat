var dropitControllers = angular.module("dropitControllers", []);
dropitControllers.controller("MainCtrl", function(
			$scope,
			$rootScope,
			$http,
			$location) {
	$scope.assessments = [
		{
			name : "test",
			grade : 75,
			weight: 10,
		},
		{
			name : "test1",
			grade : 70,
			weight: 5,
		},
	];
	$scope.goal_mark = 50;
	$scope.add_assessment = function(){
		$scope.assessments.push({
			name : "new assessment",
			grade : 75,
			weight : 10,
		});
	}
	$scope.remove_assessment = function(){
		$scope.assessments.pop();
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
