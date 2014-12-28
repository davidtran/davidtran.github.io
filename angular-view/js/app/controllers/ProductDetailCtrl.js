(function(ng, app) {
    'use strict';

    app.controller('ProductDetailCtrl', function($scope, RequestContext) {

        $scope.product = {
            id: 1,
            title: 'Best laptop',
            description: 'We provide best laptop'
        }

        var requestPrefix = 'main.product-detail';

        $scope.$on('requestContextChange', function() {
            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }

            $scope.subview = RequestContext.getActiveSection(requestPrefix);
        });
    });
}) (angular, app);