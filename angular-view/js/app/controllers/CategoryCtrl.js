(function(ng, app) {
    'use strict';

    app.controller('CategoryCtrl', function($scope, RequestContext) {
        var requestPrefix = 'main.category';

        if (ng.isUndefined($scope.subview) || $scope.subview == 'category') {

            $scope.subview = 'list';
        }



        $scope.$on('requestContextChange', function() {

            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }

            $scope.subview = RequestContext.getActiveSection(requestPrefix);
        });
    });
}) (angular, app);