//Var,let and const
//scope - a certain region of the program where the defined variable exists and be recognized. Beyond that it cannot be recognized.
//Different types of scopes:- Global scope, Functional Scope Block scope

//var a = 5; This is the Global scope.

// function demo(){
//     Functional Scope
// }

// {
//     Block Scope
// }

// var is functional scope | let and const are block scope.

// function test(){
//     let a = "Hello";

//     if(true){
//         let a = "Hi";
//         console.log(a);
//         // a = Hi | Here a="Hi" shadows a="Hello". This is known as variable shadowing.
//         //var variable can be shadowed by let variable. But let or const variable cannot be shadowed by var variable(illegal shadowing)
//     }

//     console.log(a);// a = hello | Takes global scope value
// }
// test();

//Declaration

//var a;
//var a;
//Same variable can be re-declared multiple times using var in same scope or any scope.
//re-initialize is possible using var keyword.

//let a;
//let a;
//A variable cannot be re-declared using let keyword in same scope - Gives an error.[In different scope it is fine]
//re-initialize is possible using let keyword.

//const a; //const a = 10[right]
//const a;
//same as let keyword. However, here we need to intialize a value while declaring[const a = 10].
//re-initialize is not possible using const keyword.

//Hoisting
//Temporal dead zone - Time between the declaration and initialization of let and const variables.
//[They are in the scope but they are not declared.]



//Function
//Function declaration or Function Definition or Function Statement
// function test(x){
//     return x * x;
// }

//Function Expression:- When a function is stored inside a variable.
// const fun = function(){
//     return 0;
// }
//fun();//function call
//[Function without name is anoymous function]

//First class Functions - A function that can be treated like a variable. It can be passed to another function. Basically what a variable do that the first class function can do.

//Example:-
// function square(n){
//     return n * n;
// }

// function displaySquare(fn){
//     console.log(fn(8));//First class function
// }

// displaySquare(square);

//What is IIFE?
// IIFE is Immediately Invoked Function Expressions 

// (function iife(n){
//     console.log(n*n);
// })(10);

//Syntax difference - function is invoked immediately while the function is defined.

// (function iife(n){
//     return (function(x){
//         console.log(n);//Since n is not declared in this scope, the function would look in the parent function whether n is present or not. This phenomenon is known as "Closure".
//     })(2);
// })(10);
//output - 10

//Closure:- Abilty of the function to access the function and variable that are lexically out of the scope. 

//change let and var:-
// for(let i=0; i<10; i++){
//     console.log(i);
//     setTimeout(function(){
//         console.log(i);
//     }, i*1000);
// }

// var a = 10;

// var fun = function(a,...nums){ //...nums is rest operator
//     console.log(nums);
//     console.log(a);
// }

// var arr = [3,6]

// fun(1,...arr);//spread operator
//spread operator should be the last parameter in function definition.

// function sliceIntoChunks(arr, chunkSize) {
//     const res = [];
//     for (let i = 0; i < arr.length; i += chunkSize) {
//         // console.log(i+=chunkSize);
//         const chunk = arr.slice(i, i + chunkSize);
//         res.push(chunk);
//         console.log(res);
//     }
//     return res;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.length);
// console.log(sliceIntoChunks(arr, 3));
//i=0[123]
//i=3[456]
//i=6[789]
//i=9[10]

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(sliceArrayRow(arr, 3));

// function sliceArrayRow(arr, rowSize) {
//     const tempArray = [];
//     for(let i = 0; i < arr.length; i = i + rowSize){
//         const slicedRow = arr.slice(i, i + rowSize);
//         tempArray.push(slicedRow);
//     }
//     return tempArray;

// }
// console.log(arr);//Slice method does not modify the original array

// function spliceIntoChunks(arr, chunkSize) {
//     const res = [];
//     while (arr.length > 0) {
//         const chunk = arr.splice(0, chunkSize);
//         res.push(chunk);
//     }
//     return res;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(spliceIntoChunks(arr, 2));
// console.log(arr);//Splice method modifies the original array
//Slice method does not affect the original array. However, Splice method would modify the original array.

// const a = {};
// const b = {key: "b"};
// const c = {key: "c"};

// a[b]=123;
// a[c]=234;
// console.log(a);

//Convert Object to String:- JSON.stringify();
//Convert String to Object:- JSON.parse();

//Shallow Copy:-  when you change either the source or the copy, you may also cause the other object to change too.
// let ingredients_list = ["noodles", { list: ["eggs", "flour", "water"] }];

// let ingredients_list_copy = Array.from(ingredients_list);
// console.log(JSON.stringify(ingredients_list_copy));
// // ["noodles",{"list":["eggs","flour","water"]}]

// ingredients_list_copy[1].list = ["rice flour", "water"];
// console.log(ingredients_list[1].list);
// // Array [ "rice flour", "water" ]
// console.log(JSON.stringify(ingredients_list));
// // ["noodles",{"list":["rice flour","water"]}]

///////////////////////////////////Arrays//////////////////////////////////////

//let arr = [];//Empty Array
//push();
//pop();
//shift();
//unshift();

///////////Looping an Array///////////:-
//for loop and while loop

///////////////////////Inbuilt Loop Methods///////////////////////////////////

//map method:-
// const numbers = [1,2,3,4,5];

// numbers.map((item,index,array)=>{
//     console.log(item,index,array);
// })
// Output:-
// 1 0 [1, 2, 3, 4, 5]
// 2 1 [1, 2, 3, 4, 5]
// 3 2 [1, 2, 3, 4, 5]
// 4 3 [1, 2, 3, 4, 5]
// 5 4 [1, 2, 3, 4, 5]

// const numbers = [1,2,3,4,5];

// const newNums = numbers.map((item,index,array)=>{
//     return item * 5;
// })
// console.log(newNums);//map method gives new array as an output.
// console.log(numbers);//No modification on original array.



//Filter method:- Gives an new array based on the filter condition. Returns every element that satisfies the condition.
// const numbers = [1,2,3,4,5];

// const newNums = numbers.filter((item,index,array)=>{
//     return item > 3;
// })
// console.log(newNums);
// console.log(numbers);

//Reduce method:- This method would give one value at the end.
// const numbers = [1,2,3,4,5];
// //prev is accumulator[previous value]
// const sum = numbers.reduce((prev,item,index,array)=>{
//     return prev + item;
// },0);//Here 0 is the default value, Any value can be used.
// console.log(sum);//15
// console.log(numbers);//No modification on original array.

//Some method:-
// const numbers = [1,2,3,4,5];
// const newNums = numbers.some((item,index,array)=>{
//     return item > 3;
// })
// console.log(newNums);//[o/p = true] Gives boolean as an output and output would be true or false if anyone condition is satisfied.
// console.log(numbers);//No modification on original array.

//Every method:-
// const numbers = [1,2,3,4,5];
// const newNums = numbers.every((item,index,array)=>{
//     return item > 3;
// })
// console.log(newNums);//[o/p = false] Gives boolean as an output and output would be true or false if all/every condition is satisfied.
// console.log(numbers);//No modification on original array.

//Find method:-
// const numbers = [1,2,3,4,5];
// const newNums = numbers.find((item,index,array)=>{
//     return item > 3;
// })
// console.log(newNums);//[o/p = 4] Returns the first element which satisfies the condition.
// console.log(numbers);//No modification on original array.

//findIndex Method:-
// const arr = [1,2,3,4,5,6];

// const index = arr.findIndex((item)=>{
//       return item === 5;
// })
// console.log(index);//return index of the element


///////////////Spread & Rest Operator/////////////////

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8,9,0];

// const finalArray = [...arr1, ...arr2];//Spread Operator
// //console.log(finalArray);//[o/p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]]

// function nums(...numbers){//Rest operator is used in the function parameter. By using it we can pass as many arguments and rest operator will take all aruguments as separate parameters.
//     return numbers;
// }

// console.log(nums(arr1,arr2,5,"siva"));

////////More Array Methods/////////////////

// concat
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8,9,0];
// const moreArr = ["siva","obg"];

// const newArr = arr1.concat(arr2,moreArr);
// console.log(newArr);//[o/p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,'siva', 'obg']] returns new array

//slice
// const arr = [1,2,3,4,5];
// const newArr = arr.slice(0,2);//it can be .slice(-1 or -2)[o/p = [5] or [4,5]]
// console.log(newArr);//Return sliced array
// console.log(arr);//no modification in original array

//splice
// const arr = [1,2,3,4,5];
// const newArr = arr.splice(1,2,"siva");//it can be .slice(-1 or -2)[o/p = [5] or [4,5]]
// console.log(newArr);//Return deleted items
// console.log(arr);//return modified original array

//ellaborate:- .splice(1[index],2[number of items need to be deleted],"siva"[new items that would replace deleted items]);

//fill
// const dummy = [1,2,3,4,5,6];
// dummy.fill("*",3);//Replace the elements from 3rd index by *
// console.log(dummy);

//flat method:-
// const flatEx = [1,[2,3],[6,2,3],2];
// const flattenedArray = flatEx.flat();//remove all nested array and converts to one single array. 
//And we provide the level of flat like flatEx.flat(2); - It would flattened to two levels.
// console.log(flattenedArray); //o/p = [1, 2, 3, 6, 2, 3, 2]

//reverse method:-
// const nums = [1,2,3,4,5,6]
// const reversedArray = nums.reverse();
// console.log(reversedArray);
// console.log(nums);//modify the original array

//sort method:-
// const nums = [3,7,8,0,1,4,3,7];
// nums.sort((a,b) => a - b);//Arrange in ascending order [0, 1, 3, 3, 4, 7, 7, 8]
// console.log(nums);

// nums.sort((a,b) => b - a);//Arrange in descendng order [8, 7, 7, 4, 3, 3, 1, 0]
// console.log(nums);



////////////////////////////////Array map, filter and Reduce method(polyfills)////////////////////////////////////
//Iterate over an array and perform computation.

//map method:-Creating a new array by applying a function on each element of the array.
// const nums = [1, 2, 3, 4, 5];

// const newArr = nums.map((item, i, arr) => {//item = each element of array; i = index; arr = complete array
//     return item * 2;
// })

// console.log(newArr);//Returns new array | No modification in original array

//filter method:- Takes each element in the array and applies conditional statement on it and returns the element which satisfies condition.

// const nums1 = [7, 3, 8, 98, 45, 2];

// const filterArr = nums1.filter((item, i, arr) => {
//     return item > 10;
// })
// console.log(filterArr);//New array | No modification in original array

// //Reduce method:- reduces array of value down to only one value
// const nums2 = [1, 2, 3, 4, 5, 6];

// //Here accumulator is added extra and initialized a value 0 and if not initialized it would take first element of array.
// //Accumulator would store value of previous operations/computational.
// const reduceArr = nums2.reduce((acc, item, i, arr) => {
//     return acc + item;
// }, 0)
// console.log(reduceArr);//21

/////////////////Polyfills for map method/////////////////////////////////

// Array.prototype.myMap = function (cb) {
//     let temp = [];//since map method gives output in new array.
//     //To iterate each element use for loop.
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this))
//     }
//     return temp;
// }

// const nums4 = [1,2,3,4,5];
// const newArr4 = nums.myMap((item, i, arr) => {
//     return item * 2;
// })
// console.log(newArr4);


/////////////////Polyfills for filter method/////////////////////////////////

// Array.prototype.myFilter = function (cb) {
//     let temp = [];//since map method gives output in new array.
//     //To iterate each element use for loop.
//     for (let i = 0; i < this.length; i++) {
//         if(cb(this[i],i,this)) temp.push(this[i]);
//     }
//     return temp;
// }

// const nums5 = [1,2,3,4,5];
// const newArr5 = nums.myFilter((item, i, arr) => {
//     return item > 2;
// })
// console.log(newArr5);

/////////////////Polyfills for reduce method/////////////////////////////////
//need to learn

// Array.prototype.myReduce = function(cb,initialValue){
//     var accumulator = initialValue;

//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator,this[i],i,this) : this[i];
//     }
//     return accumulator;
// }
// const nums6 = [3,2,1,4,5,2,10];
// const reduceArr1 = nums6.myReduce((acc, item, i, arr) => {
//     return acc + item;
// }, 0)
// console.log(reduceArr1);//27

//Question 1:-
//Difference between map() and forEach()
// const nums = [1,2,3,4,5,6,7,8];

// const mapResult = nums.map((item)=>{
//     return nums * 4;
// })
// console.log(mapResult);
//Return new array output and no modification in original array. We can chain other methods with map method. Since it returns
//Like this:- const mapResult = nums.map((item)=>{
//     return nums * 4;
// }).sort();

// const forEachResult = nums.forEach((item,i)=>{
//     nums[i] = item + 1;
// })
// console.log(nums);
//Does not return output in new array. However it modifies original array only. We cannot chain other methods with forEach since it does not return anything.


//////////////Problem Statement/////////////////////////
//Ques 1:-
//Return name of students in Capital letters

let students = [
    { name: "siva", rollNumber: 12, marks: 30 },
    { name: "Avis", rollNumber: 2, marks: 69 },
    { name: "Ram", rollNumber: 29, marks: 45 },
    { name: "Ganesh", rollNumber: 17, marks: 86 },
    { name: "Stanly", rollNumber: 23, marks: 52 },
]

const studentsNameInCaps = students.map((item) => {
    return item.name.toUpperCase();
})
console.log(studentsNameInCaps);

//Return details of students who scored more than 60 marks.
const studentsList = students.filter((item) => {
    return item.marks > 60;
})
console.log(studentsList);//Returns two element which satisfies the condition.

//Return - More than 60 marks and roll number greater than 15.
const studentsListRoll = students.filter((item) => {
    return (item.marks > 60 && item.rollNumber > 15);
})
console.log(studentsListRoll);//Returns only one element which satisfies the condition.

//Sum of Marks of all students
const studentsmarks = students.reduce((accu, item) => {
    return accu + item.marks;
}, 0);
console.log(studentsmarks);//Returns 282

//Return only names of students who scored more than 60
const studentsName60 = students.filter((item) => {
    return item.marks > 60;
}).map((currItem) => currItem.name)
console.log(studentsName60);//['Avis', 'Ganesh']

//map, filter and reduce allows chaining of other function infront of this function.

//Return total marks for students with marks greater than 60 after 20 marks have been added to those who scored less than 60.

const studentsMarks60 = students.map((item) => {
    if (item.marks < 60) {
        item.marks += 20;
    }
    return item;
}).filter((item) => item.marks > 60).reduce((acc, currItems) => acc + currItems.marks, 0)
console.log(studentsMarks60);



//Ques 1:- Find second largest number in an array

//Brute Force Solution:-

//My Method 1:-
// const nums = [12,35,1,10,34,1];
// // const nums = [10,5,10];

// const uniqueArr = new Set(nums);//new Set() method would create an object of unique items from the given Array.
// console.log(uniqueArr);//We are using this Set method, because to overcome the issue of similar numbers.[Set(5) {12, 35, 1, 10, 34}]

// const objToArray =  Array.from(uniqueArr);//Array.from() converts the object to array
// console.log(objToArray); //[12, 35, 1, 10, 34]

// objToArray.sort((a,b)=>{
//     return a - b;//Sorting in Ascending order
// })

// console.log(nums);//[12, 35, 1, 10, 34, 1]
// console.log(objToArray);//[1, 10, 12, 34, 35]

// const secondLargestNum = nums.slice(-2,-1); //[34]
// console.log(secondLargestNum.toString()); //34
// console.log(objToArray);

//Method 2:-
// function findSecondLargestNum(arr) {
//   const uniqueNums = Array.from(new Set(arr));
// //   console.log(uniqueNums);

//   uniqueNums.sort((a, b) => {
//     return b - a;
//   });
// //   console.log(uniqueNums);
//   if (arr.length >= 2) {
//     return uniqueNums[1];
//   } else {
//     return "Only one number is present, So operation cannot be performed";
//   }
// }

// console.log(findSecondLargestNum([12, 35, 1, 10, 34, 1]));
// console.log(findSecondLargestNum([10,5,10]));
// console.log(findSecondLargestNum([12]));

// Question 2:-
// Rotate array to the right by k steps.
// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

//My Method:-
// function rotateArr(arr, k) {
//   let size = arr.length;
//   console.log(size);
//   //if statement to reduce the iteration
//   if (k > size) {
//     k = k % size;
//     console.log(k);
//   }

//   for (let i = 0; i < k; i++) {
//     let poppedElem = arr.pop();
//     // console.log(poppedElem);
//     console.log(arr);
//     arr.unshift(poppedElem);
//   }
//   return arr;
// }

// console.log(rotateArr([-1, -100, 3, 99], 8));

//Method 2:-
// function rotateArr(arr, k) {
//   let size = arr.length;
//   console.log(size);
//   //if statement to reduce the iteration
//   if (k > size) {
//     k = k % size;
//     console.log(k);
//   }

//  const splicedArr = arr.splice(size - k, size)
//  arr.unshift(...splicedArr);
//   return arr;
// }

// console.log(rotateArr([-1, -100, 3, 99], 1));

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// My Method:-
// function removeDuplicate(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i + 1, 1);
//       i--;
//       console.log(i);
//     }
//   }
//   return arr.length;
// }

// console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]));
