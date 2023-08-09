//Closure:- It is a function that references variable in the outer scope from its inner scope

//Scope refers to the current context of the code. [global, Block and locally defined]
//Lexical Scope:- A variable defined outside the function is accessible inside the function. But viceversa is not possible.

//Every closure has three scopes:-
//1.Local scope
//2.Outer Functions scope
//3.Global scope

//Ex 1:-
//write a function  that would allow to do this

function createBase(num) {
    console.log(num);
    return function (innernum) {
        return num + innernum;
    }
}

var addSix = createBase(6);
// addSix(10);//return 16
// addSix(21);//return 27
console.log(addSix(10));
console.log(addSix(21));

//Ex 2:-
//Time optimization using closures

//Example using for loop
function findIndex(index) {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }
    return (a[index]);
}
console.time("6");
console.log(findIndex(4567));//Output:- 20857489 Time(55.368896484375 ms)
console.timeEnd("6");

//Example using Closures
function find() {
    let a = [];
    for (let i = 0; i < 1000000; i++) {
        a[i] = i * i;
    }

    return function (index) {
        return (a[index]);
    }
}

const closureFn = find();
console.time("6");
console.log(closureFn(4567));//Output:- 20857489 Time(0.242919921875 ms) 54 ms difference
console.timeEnd("6");

//Ex 3:-
//Block Scope and SetTimeout()
function a() {
    for (var i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)

    }
}
a();//Output:- 3 3 3

function a() {
    for (let i = 0; i < 3; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)

    }
}
a();//Output:- 0 1 2

//if var
//i=0  
//i=1
//i=2
//i=3

//then
//i=3
//i=3
//i=3

//if let
// {
//     i = 0
// }
// {
//     i = 1
// }
// {
//     i = 2
// }

//Using var we can print 0 1 2, but using closure.
function a() {
    for (var i = 0; i < 3; i++) {
        function innerscope(i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000)

        }
        innerscope(i);
    }
}
a();//Output:- 3 3 3