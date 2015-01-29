var download = angular.module('download', [
    'ui.router'
])

download.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('download', {
        url:'download',
        templateUrl: 'app/download/download.html'
    });
});

