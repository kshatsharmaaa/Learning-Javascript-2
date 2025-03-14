function x() {
    var i = 1;
    setTimeout(function() {
        console.log(i);
    }, 1000);
    console.log("abcd"); // it prints this first and then wait for 1 sec and print i
}
x(); //after 1 sec it prints 1

/*
// easy way 
function a() {
    for(var i =1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
}
a(); // 6 6 6 6 6 ->wrong output
*/
// using let
function a() {
    for(let i =1; i<=5; i++) {
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
}
//a(); // 1 2 3 4 5 ->correct output

//You cant use let you have to use var
function b() {
    for(var i =1; i<=5; i++) {
        function close(i) {
            setTimeout(function() {
                console.log(i);
            }, i*1000);
        } 
        close(i);       
    }    
}    
b(); 