angular.module('Eggly').service('dataService', function() {
    console.log("dataService");
    this.getSentence = function() {
        return "blabla";
    };

    this.getNewSentence = function(currSentence) {
        return currSentence += '!';
    };
});
