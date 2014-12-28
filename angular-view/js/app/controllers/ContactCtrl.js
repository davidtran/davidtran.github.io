(function(ng, app) {
    'use strict';

    app.controller('ContactCtrl', function($scope, $routeParams, RequestContext) {

        var requestPrefix = 'main.contact';
        var requestParamName = 'personId';
        $scope.personList = [
            {
                id:1,
                name: 'David',
                description: 'David is a smart one. He makes decision accurate and very quickly. He\'s the most important in our team.'
            },
            {
                id: 2,
                name: 'Putin',
                description: 'Putin is a strong one, assertive and great vision'
            }
        ];
        if ($routeParams.hasOwnProperty('personId')) {
                $scope.personId = $routeParams.personId;
            }
        $scope.$on('requestContextChange', function() {

            if ($routeParams.hasOwnProperty('personId')) {
                $scope.personId = $routeParams.personId;
            }

            if ( ! RequestContext.isChangeRelevant(requestPrefix)) {
                return;
            }

            $scope.subview = RequestContext.getActiveSection(requestPrefix);

        });
    });
}) (angular, app);