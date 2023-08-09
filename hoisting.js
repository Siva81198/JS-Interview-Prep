getName();//output is complete function
console.log(x);//Output is undefined
var x = 7;

function getName(){
    console.log("Siva");
}

//What is Hoisting?
//For creating an execution content two phase is required like "memory creation phase" and "Code Execution phase".
//In Memory creation phase:- All variables and functions defined in the code will be alloted memory space.
//Memory space alloted variable will have undefined value and the function call will have the whole function in this phase.

//In Code execution phase - when code executes the variables will be alloted the value defined in the code and the function call will be invoked.

//This is hoisting - As we can access the function call before function definition but when we access the variables before it is initialized it will be undefined.
//All variables and funtion to the top.