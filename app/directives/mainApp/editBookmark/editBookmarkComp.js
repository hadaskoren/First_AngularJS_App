angular.module('Eggly')
    .component("editBookmark", {
            templateUrl: "app/directives/mainApp/editBookmark/editBookmark.html",
            bindings: {
                bookmarks: '<',
                shouldShowEditing: '&',
                editedBookmark: '<',
                editBookmark: '&',
                cancelEditing: '&'
            },
            controller: function() {

                var ctrl = this;

                ctrl.$onInit = function () {
                    var x = ctrl;
                };

                ctrl.updateBookmark = function(bookmark) {
                    var index = _.findIndex(ctrl.bookmarks, function (currBookmark) {
                        return currBookmark.id === bookmark.id;
                    });
                    ctrl.editBookmark({index:index,bookmark:bookmark});
                }
            }
    });
