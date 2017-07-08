angular.module('Eggly')
    .component("bookmarkList", {
            templateUrl: "app/directives/mainApp/bookmarkList/bookmarkList.html",
            bindings: {
                bookmarks: '<',
                currentCategory: '<',
                startEditing: '&',
                isSelectedBookmark: '&',
                editedBookmark: '<',
                currentEditedBookmark: '&',
            },
            controller: function() {
                var ctrl = this;

                ctrl.setEditedBookmark = function(bookmark) {
                    ctrl.currentEditedBookmark({editedBookmark: bookmark});
                };

                ctrl.deleteBookmark = function(bookmark) {
                    _.remove(ctrl.bookmarks, function (currBookmark) {
                        return currBookmark.id === bookmark.id;
                    });
                };

                ctrl.whichBookmark = function(bookmarkId) {
                    ctrl.isSelectedBookmark({bookmarkId:bookmarkId});
                };
            }
    });