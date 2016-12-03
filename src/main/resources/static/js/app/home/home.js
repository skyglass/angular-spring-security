define([
	'angular',
	'controllers'
], function(angular, controllers) {
    controllers.controller("homeCtrl", ['$scope', 'skgConfig',
	    function ($scope, skgConfig) {
		  $scope.data = skgConfig;
    	}]);
});