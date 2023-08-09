//Whenever any JS code is executed - a global object is created(window) and Global execution context is created alongwith it this variable is also created. 
//Anything which is not inside function - it is in global scope.

//undefined in console - Memory alloted but called before intialization.
//Not defined in console - Memory not alloted [Error]



function b(){
    a = 90;
    console.log(a);
}
let a = 10;
b();