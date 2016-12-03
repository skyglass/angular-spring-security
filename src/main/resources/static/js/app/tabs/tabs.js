define([
	'angular',
	'controllers'
], function(angular, controllers) {
    controllers.controller("tabsCtrl", ['$scope', '$http', 'text',
        function($scope, $http, text) {
	        //Controller in the abstract state is used only to set "global" elements for the state and the sub-states
	        $scope.voice = "Tab Design 4 ui-router";
	        $scope.text = text;
	    	$http.get('/user/').success(function(data) {
	    		$scope.user = data.name;
	    	});    		
    }]);
});