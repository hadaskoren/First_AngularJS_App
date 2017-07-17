// angular.module('x')
//     .directive("mainApp", function() {
//         return {
//             restrict: "E",
//             templateUrl: "app/directives/mainApp/mainApp.html",
//             controller: function ($scope) {
//
//                 $scope.currentCategory = null;
//                 $scope.newBookmark = null;
//                 $scope.isCreating = false;
//                 $scope.isEditing = false;
//
//                 function setCurrentCategory(category) {
//                     $scope.currentCategory = category;
//                     cancelCreating();
//                     cancelEditing();
//                 }
//
//                 function isCurrentCategory(category) {
//                     return $scope.currentCategory !== null && category.name === $scope.currentCategory;
//                 }
//
//                 $scope.setCurrentCategory = setCurrentCategory;
//                 $scope.isCurrentCategory = isCurrentCategory;
//
//                 //-------Creating and Editing states
//
//                 function resetCreateForm() {
//                     $scope.newBookmark = {
//                         title: '',
//                         url: '',
//                         category: $scope.currentCategory
//                     }
//                 }
//
//                 function startCreating() {
//                     $scope.isCreating = true;
//                     cancelEditing();
//                     resetCreateForm();
//                 }
//
//                 function cancelCreating() {
//                     $scope.isCreating = false;
//                 }
//
//                 function startEditing() {
//                     $scope.isCreating = false;
//                     $scope.isEditing = true;
//                 }
//
//                 function cancelEditing() {
//                     $scope.isEditing = false;
//                 }
//
//                 function shouldShowCreating() {
//                     return $scope.currentCategory && !$scope.isEditing;
//                 }
//
//                 function shouldShowEditing() {
//                     return $scope.isEditing && !$scope.isCreating;
//                 }
//
//                 $scope.startCreating = startCreating;
//                 $scope.cancelCreating = cancelCreating;
//                 $scope.startEditing = startEditing;
//                 $scope.cancelEditing = cancelEditing;
//                 $scope.shouldShowCreating = shouldShowCreating;
//                 $scope.shouldShowEditing = shouldShowEditing;
//             }
//         }
//     });