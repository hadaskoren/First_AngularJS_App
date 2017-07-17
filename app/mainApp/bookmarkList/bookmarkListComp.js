myApp.component("bookmarkList", {
            templateUrl: "app/mainApp/bookmarkList/bookmarkList.html",
            bindings: {
                bookmarks: '<',
                currentCategory: '<',
                startEditing: '&',
                isSelectedBookmark: '&',
                editedBookmark: '<',
                currentEditedBookmark: '&',
            },
        controller: 'bookmarkListCtrl',
        controllerAs: 'ctrlNewName'
    });