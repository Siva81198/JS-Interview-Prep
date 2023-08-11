//Whenever any JS code is executed - a global object is created(window) and Global execution context is created alongwith it this variable is also created. 
//Anything which is not inside function - it is in global scope.

//undefined in console - Memory alloted but called before intialization.
//Not defined in console - Memory not alloted [Error]


// function x() {
//     let a = 8;
//     function y() {
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// let z = x();
// z();
// console.log(z);

for (var i = 1; i <= 5; i++) {
    function disp(i) {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    disp(i);
}