// angular.module('x')
//     .directive("editBookmark", function() {
//         return {
//             restrict: "E",
//             templateUrl: "app/directives/mainApp/editBookmark/editBookmark.html",
//             controller: function($scope) {
//
//                 function updateBookmark(bookmark) {
//                     var index = _.findIndex($scope.bookmarks, function (currBookmark) {
//                         return currBookmark.id === bookmark.id;
//                     })
//                     $scope.bookmarks[index] = bookmark;
//
//                     $scope.editedBookmark = null;
//                     cancelEditing();
//                 }
//
//                 $scope.updateBookmark = updateBookmark;
//             }
//         }
//     });
