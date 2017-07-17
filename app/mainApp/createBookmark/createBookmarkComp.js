myApp.component("createBookmark", {
            templateUrl: "app/mainApp/createBookmark/createBookmark.html",
            bindings: {
                shouldShowCreating: '&',
                startCreating: '&',
                isCreating: '<',
                newBookmark: '<',
                cancelCreating: '&',
                addingNewBookmark: '&',
                currentCategory: '<'
            },
            controller: function() {

                var ctrl = this;

                console.log("createBookmark Comp");

                ctrl.$onInit = function () {
                    var x = ctrl;
                };

                ctrl.createBookmark = function(bookmark) {
                    ctrl.newBookmark.title = bookmark.title;
                    ctrl.newBookmark.url = bookmark.url;
                    ctrl.newBookmark.category = ctrl.currentCategory;
                    ctrl.addingNewBookmark({bookmark:ctrl.newBookmark});
                };
            }
    });
