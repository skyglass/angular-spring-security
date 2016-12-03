define([
	'angular',
	'controllers'
], function(angular, controllers) {
    controllers.controller("messageCtrl", ['$scope', '$http',
        function($scope, $http) {
	    	$http.get('/resource/').success(function(data) {
	    		$scope.greeting = data;
	    	});    	
	}]);
});