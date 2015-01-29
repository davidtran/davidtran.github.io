var home = angular.module('home', [
    'ui.router'
]);

home.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url:'/',
        templateUrl: 'app/home/home.html'
    });

    $stateProvider.state('home.api', {
        url:'api',
        templateUrl: 'app/home/api.html'
    });

    $stateProvider.state('home.features', {
        url: 'features/',
        templateUrl: 'app/home/features.html'
    });

    $stateProvider.state('home.features_detail', {
        url: 'features/{featureId}',
        templateUrl: 'app/home/features_detail.html',
        controller: function($scope, $stateParams) {
            $scope.featureId = $stateParams.featureId
        }
    });

});