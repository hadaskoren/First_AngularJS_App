angular.module('Eggly').provider('dataProvider', function() {

    console.log("dataProvider");

    var sentence = 'Default';

    this.setSentence = function(newSentence) {
        sentence = newSentence;
    };

    // this.$get = function() {
    //     return {
    //         sentence: sentence,
    //         getSentence: function() {
    //             return "sentence";
    //         }
    //     };
    // };
});
