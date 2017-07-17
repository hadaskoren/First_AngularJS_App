myApp.component("sidebarCategories", {
            templateUrl: "app/mainApp/sidebarCategories/sidebarCategories.html",
            bindings: {
                setCurrentCategory: '&',
                isCurrentCategory: '&',
                categories: '<'
            },
            controller: function() {
                var ctrl = this;

                console.log("sidebarCategories Comp");

                ctrl.setCategory = function(category) {
                    ctrl.setCurrentCategory({category:category});
                };

                ctrl.checkCategory = function(category) {
                    ctrl.isCurrentCategory({category:category});
                }
            }
    });
