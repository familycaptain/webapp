(function() {
    var app = angular.module('familyCaptain', ['ui.router', 'ui.router.util', 'ui.bootstrap']);
    
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('/home');
    
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: "/parts/Home/home.html",
                    controller: "HomeCtrl",
                }),
            $stateProvider
                .state('createFamily', {
                    url: '/createFamily',
                    templateUrl: "/parts/Family/CreateFamily/createFamily.html",
                    controller: "CreateFamilyCtrl",
                })
        }]);
})();