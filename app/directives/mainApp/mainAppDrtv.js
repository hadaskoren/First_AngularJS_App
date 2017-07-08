angular.module('Eggly')
    .directive("mainAppDrtv", function() {
        return {
            restrict: E,
            templateUrl:"mainApp.html",
            controller: function($scope) {
                console.log(data);
            },
            scope: {
                data: '='
            },

            link: function() {

            }
        }
    }
)