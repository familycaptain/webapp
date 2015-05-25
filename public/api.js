(function(){
    var app = angular.module('familyCaptain');
    
    var api = ['$http', function($http) {
        var call = function(route, request) {
            var url = 'http://Rodney-Laptop:3000/api' + route;
            return $http({
                method: 'POST',
                url: url,
                data: angular.toJson(request || {}),
                headers: {'Content-Type': 'application/json'}
            });
        };
        var service = {};
        
        service.createFamily = function(familyName, displayName) {
            var request = {
                family_name: familyName,
                display_name: displayName
            };
            return call('/Family/Create', request);
        };
        
        return service;
    }];
    
    app.factory('api', api);
})();