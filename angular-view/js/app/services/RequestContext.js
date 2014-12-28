(function(ng, app) {
    'use strict';

    app.service('RequestContext', function($q){
        var action = '';
        var params = {};
        var sections = [];
        var previousAction = '';
        var previousParams = {};

        var setContext = function(newAction, newParams) {
            previousAction = action;
            previousParams = params;

            sections = newAction.split('.');
            params = newParams;
            action = newAction;
        }

        var isChangeRelevant = function(prefix) {
            if ( ! startWith(action, prefix) ) {
                return false;
            }

            if (action != previousAction) {
                return true;
            }


            return false;
        }

        var startWith = function(bigStr, smallStr) {
            if ( smallStr == bigStr
             ||  bigStr.indexOf(smallStr + '.') == 0) {
                return true;
            }

            return false;
        }

        var getActiveSection = function(prefix) {
            console.log(action, prefix);
            if ( ! startWith(action, prefix) ) {
                return false;
            }

            if (prefix === '') {
                return sections[0];
            }

            var dept = prefix.split('.').length;

            if (dept == sections.length) {
                return null;
            }

            return sections[dept];
        }
        return ({
            setContext: setContext,
            getActiveSection: getActiveSection,
            isChangeRelevant: isChangeRelevant
        });
    });
}) (angular, app)