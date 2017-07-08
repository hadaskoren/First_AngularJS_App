/**
 * Created by Hadas on 6/25/17.
 */
angular.module('Eggly',[

])
.directive("mainApp", function() {
        return {
            templateUrl:"directives/mainApp/mainApp.html",
            
            scope: {
                
            },
            
            link: function() {
                
            }
        }
    }
)
.controller('MainCtrl', function($scope) {

        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"},
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "https://angularjs.org", "category": "Development"},
            {"id": 1, "title": "Egghead.io", "url": "https://angularjs.org", "category": "Development"},
            {"id": 2, "title": "A List Apart", "url": "https://alistapart.com/", "category": "Design"},
            {"id": 3, "title": "One Page Love", "url": "https://onepagelove.com", "category": "Design"},
            {"id": 4, "title": "MobilityWOD", "url": "https://mobilitywod.com", "category": "Design"},
            {"id": 5, "title": "Robb Wolf", "url": "https://robbwolf.com", "category": "Exercise"},
            {"id": 6, "title": "Senor Gif", "url": "https://memebase.cheezburger.com/senergif", "category": "Exercise"},
            {"id": 7, "title": "Wimp", "url": "https://wimp.com", "category": "Humor"},
            {"id": 8, "title": "Dump", "url": "https://dump.com", "category": "Humor"},
        ];

        $scope.currentCategory = null;
        $scope.newBookmark = null;

        function setCurrentCategory(category) {
            $scope.currentCategory = category;
            cancelCreating();
            cancelEditing();
        }

        function isCurrentCategory(category) {
            return $scope.currentCategory !== null && category.name === $scope.currentCategory;
        }

        $scope.setCurrentCategory = setCurrentCategory;
        $scope.isCurrentCategory = isCurrentCategory;
        $scope.isCreating = false;
        $scope.isEditing = false;

        //-------CRUD


        function resetCreateForm() {
                $scope.newBookmark = {
                    title: '',
                    url: '',
                    category: $scope.currentCategory
                }
        }

        function createBookmark(bookmark) {
            $scope.newBookmark.title = bookmark.title;
            $scope.newBookmark.url = bookmark.url;
            $scope.newBookmark.category = $scope.currentCategory;
            $scope.bookmarks.push($scope.newBookmark);
            setCurrentCategory($scope.currentCategory);
            resetCreateForm();
        }

        $scope.createBookmark = createBookmark;
        $scope.editedBookmark = null;

        function setEditedBookmark(bookmark) {
            $scope.editedBookmark = angular.copy(bookmark);
        }

        function updateBookmark(bookmark) {
            var index = _.findIndex($scope.bookmarks, function(currBookmark) {
                return currBookmark.id === bookmark.id;
            })
            $scope.bookmarks[index] = bookmark;

            $scope.editedBookmark = null;
            cancelEditing();
        }

        function isSelectedBookmark(bookmarkId) {
            return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkId;
        }

        function deleteBookmark(bookmark) {
            _.remove($scope.bookmarks, function(currBookmark) {
                return currBookmark.id === bookmark.id;
            });
        }

        $scope.setEditedBookmark = setEditedBookmark;
        $scope.updateBookmark = updateBookmark;
        $scope.isSelectedBookmark = isSelectedBookmark;
        $scope.deleteBookmark = deleteBookmark;

        //-------Creating and Editing states

        function startCreating() {
            $scope.isCreating = true;
            cancelEditing();
            resetCreateForm();
        }

        function cancelCreating() {
            $scope.isCreating = false;
        }

        function startEditing() {
            $scope.isCreating = false;
            $scope.isEditing = true;
        }

        function cancelEditing() {
            $scope.isEditing = false;
        }

        function shouldShowCreating() {
            return $scope.currentCategory && !$scope.isEditing;
        }

        function shouldShowEditing() {
            return $scope.isEditing && !$scope.isCreating;
        }

        $scope.startCreating = startCreating;
        $scope.cancelCreating = cancelCreating;
        $scope.startEditing = startEditing;
        $scope.cancelEditing = cancelEditing;
        $scope.shouldShowCreating = shouldShowCreating;
        $scope.shouldShowEditing = shouldShowEditing;
    })
;