(function(){

var data = {
	user: "Дмитрия Куликова",
	items: [{action: "Сверстать сайт №1", done: false},
			{action: "Сверстать сайт №2", done: false},
			{action: "Сверстать сайт №3", done: true},
			{action: "Сверстать сайт №4", done: false}]
};


var todoApp = angular.module("todoApp",[]);

todoApp.controller("ToDoCtrl", function($scope){
	var currentDate = new Date();
	$scope.todo = data;
	$scope.showMonth = currentDate.getMonth();
	$scope.showDate = currentDate.getDate();

	$scope.incompleteCount = function () {
	var count = 0;
	angular.forEach($scope.todo.items, function (item) {
			if (!item.done) { count++ }
		});
	return count;
	};

	$scope.addNewItem = function (actionText) {
		$scope.todo.items.push({ action: actionText, done: false });
	};

});



}());