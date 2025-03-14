//Difference betwwen function statement & function expression--------------------------------------------
a();
// b(); erorr

// Function Statement-----------------------------------------------------------------------------------
function a() {
     console.log("a called");
}
a();

// Function Expression------------------------------------------------------------------------------------
var b = function() {
    console.log("b called");
}
b();

// Function Declaration-----------------------------------------------------------------------------------
console.log("aka function statement!");

// Anonymous Function---------------------------------------------------------------------------------------
/* syntaxError : Function Statements should have a name
function(){

}
*/

// Named Function Expression-------------------------------------------------------------------------------
var c = function xyz() {
    console.log("b called");
}

// xyz(); error

// Difference between Parameters & Arguments?--------------------------------------------------------------
var d = function(parameter) {
    console.log("d called", parameter);
}
d(11); // 11 is a argument

// First Class Functions------------------------------------------------------------------------------------
var d = function(parameter) {
    console.log( parameter);
}
d(function(){

});

// one more way
var d = function(parameter) {
    console.log( parameter);
    return function(){
        
    }
}

function xyz(){

}
d(xyz);

// Arrow Functions-----------------------------------------------------------------------------------------