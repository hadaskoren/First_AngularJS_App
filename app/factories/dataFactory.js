angular.module('Eggly').factory('dataFactory', function() {

    return {
        getSentence: getSentence,
        getNewSentence: getNewSentence
    };

    function getSentence() {
        return "blabla";
    }

    function getNewSentence(currSentence) {
        return currSentence += '!';
    }
});
