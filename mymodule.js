//Define toDoModule
var app = angular.module('toDoModule', []);  

	app.controller('toDoController', function($scope){
		//Define Chores Array inside Controller
		$scope.chores = ['Buy milk', 'Walk the dog', 'Rake leaves'];
		
		//call addToLIst Function
		$scope.addToList = function() {
				$scope.chores.push($scope.itemToAdd);
				// Clear the item input box
				$scope.itemToAdd = "";
		}
		
		$scope.removeItem = function(chore) {
			var index = $scope.chores.indexOf(chore);
			$scope.chores.splice(index, 1);
		}
	
	});
	


	
	



