angular.module('x')
    .directive("sidebarCategories", function() {
        return {
            restrict: "E",
            templateUrl: "app/directives/mainApp/sidebarCategories/sidebarCategories.html",
            controller: function($scope) {
                $scope.categories = [
                    {"id": 0, "name": "Development"},
                    {"id": 1, "name": "Design"},
                    {"id": 2, "name": "Exercise"},
                    {"id": 3, "name": "Humor"},
                ];
            }
        }
    });
