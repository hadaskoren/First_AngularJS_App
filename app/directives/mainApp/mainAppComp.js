angular.module('Eggly')
    .component('mainApp', {
            restrict:"E",
            templateUrl: "app/directives/mainApp/mainApp.html",
            controller: function () {

                var ctrl = this;

                ctrl.categories = [
                    {"id": 0, "name": "Development"},
                    {"id": 1, "name": "Design"},
                    {"id": 2, "name": "Exercise"},
                    {"id": 3, "name": "Humor"}
                ];

                ctrl.bookmarks = [
                    {"id": 0, "title": "AngularJS", "url": "https://angularjs.org", "category": "Development"},
                    {"id": 1, "title": "Egghead.io", "url": "https://angularjs.org", "category": "Development"},
                    {"id": 2, "title": "A List Apart", "url": "https://alistapart.com/", "category": "Design"},
                    {"id": 3, "title": "One Page Love", "url": "https://onepagelove.com", "category": "Design"},
                    {"id": 4, "title": "MobilityWOD", "url": "https://mobilitywod.com", "category": "Design"},
                    {"id": 5, "title": "Robb Wolf", "url": "https://robbwolf.com", "category": "Exercise"},
                    {"id": 6, "title": "Senor Gif", "url": "https://memebase.cheezburger.com/senergif", "category": "Exercise"},
                    {"id": 7, "title": "Wimp", "url": "https://wimp.com", "category": "Humor"},
                    {"id": 8, "title": "Dump", "url": "https://dump.com", "category": "Humor"}
                ];

                ctrl.editedBookmark = null;
                ctrl.currentCategory = null;
                ctrl.isCreating = false;
                ctrl.isEditing = false;

                ctrl.setCurrentCategory = function(category) {
                    ctrl.currentCategory = category;
                    ctrl.cancelCreating();
                    ctrl.cancelEditing();
                };

                ctrl.isCurrentCategory = function(category) {
                    return ctrl.currentCategory !== null && category.name === ctrl.currentCategory;
                };

                ctrl.isSelectedBookmark = function(bookmarkId) {
                    return ctrl.editedBookmark !== null && ctrl.editedBookmark.id === bookmarkId;
                };

                ctrl.resetCreateForm = function() {
                    ctrl.newBookmark = {
                        title: '',
                        url: '',
                        category: ctrl.currentCategory
                    }
                };

                ctrl.startCreating = function() {
                    ctrl.isCreating = true;
                    ctrl.cancelEditing();
                    ctrl.resetCreateForm();
                };

                ctrl.cancelCreating = function() {
                    ctrl.isCreating = false;
                };

                ctrl.startEditing = function() {
                    ctrl.isCreating = false;
                    ctrl.isEditing = true;
                };

                ctrl.cancelEditing = function() {
                    ctrl.isEditing = false;
                };

                ctrl.shouldShowCreating = function() {
                    return ctrl.currentCategory && !ctrl.isEditing;
                };

                ctrl.shouldShowEditing = function() {
                    return ctrl.isEditing && !ctrl.isCreating;
                };

                ctrl.addingNewBookmark = function(bookmark) {
                    ctrl.bookmarks.push(bookmark);
                    ctrl.resetCreateForm();
                };

                ctrl.editBookmark = function(index,bookmark) {
                    ctrl.bookmarks[index] = bookmark;
                    ctrl.editedBookmark = null;
                    ctrl.cancelEditing();
                };

                ctrl.currentEditedBookmark = function(editedBookmark) {
                    ctrl.editedBookmark = angular.copy(editedBookmark);
                };
            }
    });