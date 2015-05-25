(function(){
    var app = angular.module('familyCaptain');
    
    app.controller('CreateFamilyCtrl', 
        ['$scope', '$log', '$state', 'api',
        function($scope, $log, $state, api) {
            $scope.createFamily = function() {
                var familyName = $scope.familyName,
                    displayName = $scope.displayName;
                $log.info(familyName);
                $log.info(displayName);
                
                api.createFamily(familyName, displayName)
                    .then(function(response) {
                        alert(angular.toJson(response));
                    });                
            };
    }]); // CreateFamilyCtrl
})();