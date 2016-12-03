define(['angular', 'services'], function(angular, services) {
    services.service("configService", ['$resource',
        function($resource) {
    		return $resource('js/config.json');    	
    	}
    ]);
});