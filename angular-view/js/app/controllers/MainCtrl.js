(function(ng, app) {
    'use strict';

    app.controller('MainCtrl', function($scope, $route, $routeParams, RequestContext) {
        var requestPrefix = 'main';

        var isRouteRedirect = function(route) {
            return ! route.current.action;
        }

        $scope.$on('$routeChangeSuccess', function() {
            console.log($route.current.action);
            if ( isRouteRedirect( $route ) ) {
                return;
            }

            RequestContext.setContext($route.current.action, $routeParams);
            $scope.$broadcast('requestContextChange', RequestContext);
        });

        $scope.$on('requestContextChange', function() {
            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }

            $scope.subview = RequestContext.getActiveSection(requestPrefix);
            console.log($scope.subview);
        });
    });
}) (angular, app);