angular.module('Eggly')
    .component("createBookmark", {
            templateUrl: "app/directives/mainApp/createBookmark/createBookmark.html",
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
