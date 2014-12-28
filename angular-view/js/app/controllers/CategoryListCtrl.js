(function(ng, app) {
    'use strict';

    app.controller('CategoryListCtrl', function($scope, RequestContext, $routeParams) {
        var requestPrefix = 'main.category.list';
        $scope.subview = $routeParams.categoryName;
        $scope.$on('requestContextChange', function() {

            $scope.subview = $routeParams.categoryName;

            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }



        });
    });
}) (angular, app);