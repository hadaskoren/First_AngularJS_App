angular.module('Eggly')
    .controller("bookmarkListCtrl", bookmarkListCtrl);

    function bookmarkListCtrl(dataService, dataProvider) {

            console.log("bookmarkListCtrl");

            var ctrl = this;

            ctrl.sentence = dataProvider.sentence;

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

            ctrl.updateSentence = function() {
                ctrl.sentence = dataService.getNewSentence(ctrl.sentence);
            };
    }
