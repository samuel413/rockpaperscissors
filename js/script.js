// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var computerOptions=['rock','paper','scissors','natural twenty']
$('#shoot').click(function() {
    var human=$('#input').val().toLowerCase();
    var twoRN=Math.random();
    if (twoRN < 0.33) {
        var computer='0';
    } else if (twoRN < 0.67) {
        var computer='1';
    } else {
        var computer='2';
    }
});
// DOCUMENT READY FUNCTION BELOW

