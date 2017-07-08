angular.module('Eggly')
    .component("sidebarCategories", {
            templateUrl: "app/directives/mainApp/sidebarCategories/sidebarCategories.html",
            bindings: {
                setCurrentCategory: '&',
                isCurrentCategory: '&',
                categories: '<'
            },
            controller: function() {
                var ctrl = this;


                ctrl.setCategory = function(category) {
                    ctrl.setCurrentCategory({category:category});
                };

                ctrl.checkCategory = function(category) {
                    ctrl.isCurrentCategory({category:category});
                }
            }
    });
