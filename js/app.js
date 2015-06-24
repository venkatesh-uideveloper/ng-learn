var app = angular.module("venky",["ngRoute", "ngAnimate", "ui.bootstrap"]);

app.controller('TypeaheadCtrl', function($scope){
	 $scope.selected = undefined;
	 $scope.captains = ['Virat Kohil','Ms Dhoni', 'GanGuli', 'sachin Tendular','Kapil Dev','Ravi Sasthri','Azzarudin',''];
});