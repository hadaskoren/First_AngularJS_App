// angular.module('x')
//     .directive("bookmarkList", function() {
//         return {
//             restrict: "E",
//             templateUrl: "app/directives/mainApp/bookmarkList/bookmarkList.html",
//             controller: function($scope) {
//                 $scope.bookmarks = [
//                     {"id": 0, "title": "AngularJS", "url": "https://angularjs.org", "category": "Development"},
//                     {"id": 1, "title": "Egghead.io", "url": "https://angularjs.org", "category": "Development"},
//                     {"id": 2, "title": "A List Apart", "url": "https://alistapart.com/", "category": "Design"},
//                     {"id": 3, "title": "One Page Love", "url": "https://onepagelove.com", "category": "Design"},
//                     {"id": 4, "title": "MobilityWOD", "url": "https://mobilitywod.com", "category": "Design"},
//                     {"id": 5, "title": "Robb Wolf", "url": "https://robbwolf.com", "category": "Exercise"},
//                     {"id": 6, "title": "Senor Gif", "url": "https://memebase.cheezburger.com/senergif", "category": "Exercise"},
//                     {"id": 7, "title": "Wimp", "url": "https://wimp.com", "category": "Humor"},
//                     {"id": 8, "title": "Dump", "url": "https://dump.com", "category": "Humor"},
//                 ];
//
//                 function isSelectedBookmark(bookmarkId) {
//                     return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
//                 }
//
//                 function setEditedBookmark(bookmark) {
//                     $scope.editedBookmark = angular.copy(bookmark);
//                 }
//
//                 function deleteBookmark(bookmark) {
//                     _.remove($scope.bookmarks, function (currBookmark) {
//                         return currBookmark.id === bookmark.id;
//                     });
//                 }
//
//                 $scope.isSelectedBookmark = isSelectedBookmark;
//                 $scope.setEditedBookmark = setEditedBookmark;
//                 $scope.deleteBookmark = deleteBookmark;
//             }
//         }
//     });