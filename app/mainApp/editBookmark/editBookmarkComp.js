myApp.component("editBookmark", {
            templateUrl: "app/mainApp/editBookmark/editBookmark.html",
            bindings: {
                bookmarks: '<',
                shouldShowEditing: '&',
                editedBookmark: '<',
                editBookmark: '&',
                cancelEditing: '&'
            },
            controller: function() {

                var ctrl = this;

                console.log("editBookmark Comp");

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
