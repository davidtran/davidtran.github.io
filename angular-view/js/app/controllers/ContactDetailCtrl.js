(function(ng, app) {
    'use strict';

    app.controller('CategoryCtrl', function($scope, RequestContext) {
        var requestPrefix = 'main.category';
        $scope.$on('requestContextChange', function() {

            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }

            $scope.subview = RequestContext.getActiveSection(requestPrefix);
            console.log($scope.subview);
        });
    });
}) (angular, app);