angular.module('x')
    .directive("createBookmark", function() {
        return {
            restrict: "E",
            templateUrl: "app/directives/mainApp/createBookmark/createBookmark.html",
            controller: function($scope) {
                function createBookmark(bookmark) {
                    $scope.newBookmark.title = bookmark.title;
                    $scope.newBookmark.url = bookmark.url;
                    $scope.newBookmark.category = $scope.currentCategory;
                    $scope.bookmarks.push($scope.newBookmark);
                    setCurrentCategory($scope.currentCategory);
                    resetCreateForm();
                }

                $scope.createBookmark = createBookmark;
            }
        }
    });
