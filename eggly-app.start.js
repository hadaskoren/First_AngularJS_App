var myApp = angular.module('Eggly',['ui.router']);

myApp.config(['$stateProvider',function($stateProvider     ) {
    // console.log("config");
    // dataProviderProvider.setSentence("YO");
    $stateProvider
        .state('home', {
            url: '/',
            // controller: 'bookmarkListCtrl',
            template: '<h1>HELLO</h1>'
        });
}]);

myApp.run(function() {
   console.log("run");
});
