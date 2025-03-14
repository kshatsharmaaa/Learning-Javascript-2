// basic example of closure
/*
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
*/

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z); // [Function: y] returns func y

z();//7

// cool developers

function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
    
}
var z = x();
console.log(z); // [Function: y] returns func y

z();//7

//ques

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    a = 100;
    return y;    
}
var z = x();
console.log(z); // [Function: y] returns func y

z();//100 ->when we return y it refers to its lexical scope and referce to the variables persists not the values

//ques 

function w() {
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b); // trying to acces  its parents scope and its parents's parents scope
        }
        y();   
    }
    x();
}
w();
