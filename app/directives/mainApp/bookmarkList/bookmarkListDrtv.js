angular.module('Eggly')
    .directive("bookmarkList", function() {
        return {
            restrict: "E",
            templateUrl: "app/directives/mainApp/bookmarkList/bookmarkList.html"
        }
    })