// //Strings:- Textual data stored in a variable.

// //Create a string:-
// let str = "Sivasubramanian Velmurugan";

// //length of string:-
// console.log(str.length)//26

// //Accessing characters:-
// console.log(str[5]);//u
// console.log(str.charAt(2));//v

// //Looping
// //for loop

// //Modifying strings:-
// //str.[3] = "a" //Does not work
// console.log(str.replace("Siva", "Avis"));//Return new string does not modify original string.[case-sensitive]
// console.log(str.replaceAll("S", "A"));//[case-sensitive]

// const concatStr = str.concat(" Hi, How are you?");
// console.log(concatStr);

// const newStr = "    Hello World    ";
// console.log(newStr.trim());//Remove extra space from the beginning and end.

// //Searching inside the string
// console.log(str.indexOf("Vel"));//Give the index number of the first elememt find in the string.[case-sensitive]
// console.log(str.lastIndexOf('a'));//last element index number [Gives (-1) if element not found]
// console.log(str.startsWith("S"));//Give boolean output [true] or [false]
// console.log(str.endsWith("n"));//true

// //Extracting Sub-strings
// console.log(str.substring(7,24));
// console.log(str.slice(16,-1));

// //converting case
// //To convert object or array to string use:- JSON.stringify();
// const obj = {firstName:"siva"};
// console.log(typeof obj);//typeof Object
// console.log(typeof (JSON.stringify(obj)));//typeof String
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// //JS uses ASCII Code for alphabets
// //A not equal to a (Due to differnce in ASCII code)

// console.log(str.charCodeAt(0));//83
// console.log(String.fromCharCode(83));//Capital S

// //String comparsion
// const str1 = "apple";
// const str2 = "banana";

// console.log(str1.localeCompare(str2));//[-1 if not equal] | [0 if equal] | [case-sensitive]

// console.log(str.includes("Siva"));//if string found - true else false


// //Splitting and Joining Strings
// console.log(str.split("a")); //Gives output as Array ['Siv', 'subr', 'm', 'ni', 'n Velmurug', 'n']

// const arr = ['apple', 'banana', 'fig'];
// console.log(arr.join(' and ')); //Output in string => apple and banana and fig 
//[Converts Array to String]

//if num = 8
//num.toString(2); => Gives output in binary format [1000]

///////////////////////////////////////////Problem Statements/////////////////////////////////////////////////////////////
// Ques 1 : Truncate the text
// Write a function called truncate that checks the length of a given string - str, and if
// it surpasses a specified maximum length, maxlength, it replaces the end of the string
// with the ellipsis character "..." so that the length matches the maximum length

// Input: str = "Subscribe to RoadsideCoder" , maxlength=9
// Output: "Subscribe…"

// let newString = "Sivasubramanian";
// console.log(newString.length);

// function truncate(str, maxlength) {
//     if (str.length > maxlength) {
//         let slicedStr = str.slice(0, maxlength);
//         return slicedStr.concat("...");
//     } else {
//         return str;
//     }
// }
// console.log(truncate(newString, 9));


// Ques 2 - Palindrome Number
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121  ----->>>>>   Output: true
// Input: x = 10   ----->>>>>   Output: false

// function checkPalindrome(str) {
//     let reversedStr = str.split("").reverse().join("");
//     if (reversedStr == str) {
//         return "palindrome";
//     } else {
//         return "Not palondrome";
//     }

// }

// console.log(checkPalindrome("120"));
//Above code is fine for input given in terms of string.

//Method 2:-
// function checkPlanidrome(x) {
//     console.log(x.toString().split("").reverse().join(""));
//     return x < 0 ? false : x === +x.toString().split("").reverse().join("");
// }

// console.log(checkPlanidrome(121));
//+ symbol would convert string to number or don't use strict compare
//Flow of the above in-built functions 
//121=> "121" -> ['1','2','1'] -> ['1','2','1'] -> "121" -> 121 
//10=> "10" -> ['1','0'] -> ['0','1'] -> "01" -> 01


// Ques 3 : Hamming Distance:- Number of different alphabets in both the strings
// Given two strings x and y, return the Hamming distance between them.

// Input: x = "hello", y = "hwllr"
// Output: 2
// Explanation:
//   (hello)
//   (hwllr)
//     ↑  ↑

//My Method:-
// function findHammingDistance(x, y) {
//     if (x.length === y.length) {
//         let count = 0;
//         for (let i = 0; i < x.length; i++) {
//             if(x[i] != y[i]){
//                 count++;
//             }
//             // console.log(x[i]);
//             // console.log(y[i]);
//         }
//         return count;

//     }
//     else {
//         return "Hamming distance cannot be found, Since length of two strings are not same."
//     }
// }

// console.log(findHammingDistance("hello","hwllr"));//2

// Variation 2: Given two integers x and y, return the Hamming distance between thier bits.

// Input: x = 1, y = 4
// Output: 2
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑

// function binaryHammingDistance(x, y) {
//     x = x.toString(2);//1
//     y = y.toString(2)//100
//     console.log(x);
//     console.log(y);

//     if (x.length < y.length) {
//         while (x.length !== y.length) x = "0" + x;//001
//     } else {
//         while (x.length !== y.length) y = "0" + y;//100
//     }
//     console.log(x);
//     console.log(y);

//     if (x.length === y.length) {
//         let count = 0;
//         for (let i = 0; i < x.length; i++) {
//             if (x[i] != y[i]) {
//                 count++;
//             }
//         }
//         return count;//2

//     }


// }
// console.log(binaryHammingDistance(1, 4));

// Ques 4 - Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>>   Output: true;
// Input: (s = "rat"), (t = "car");         ----->>>>>   Output: false;

//My Method/Code:-
// const anagramEx = function (s, t) {

//     let tempArr_s = [];
//     let tempArr_t = [];
//     for (let i = 0; i < s.length; i++) {
//         console.log(s.charCodeAt(i));
//         let asciiNum_s = s.charCodeAt(i);
//         tempArr_s.push(asciiNum_s);
//         let asciiNum_t = t.charCodeAt(i);
//         tempArr_t.push(asciiNum_t);
//     }
//     tempArr_s.sort((a, b) => {
//         return a - b;
//     })
//     tempArr_t.sort((a, b) => {
//         return a - b;
//     })
//     console.log(tempArr_s);
//     console.log(tempArr_t);
//     if (JSON.stringify(tempArr_s) === JSON.stringify(tempArr_t)) {
//         //We cannot compare two array directly, so we can use JSON.stringify(), to convert it into string and then compare it.
//         return true;
//     } else {
//         return false;
//     }

// }

// console.log(anagramEx("anagram", "nagaram"));//true
// console.log(anagramEx("rat", "car"));//false
// console.log(anagramEx("siva", "avis"));//true

//Method 2:-
// const anagramEx1 = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     s = s.split("").sort().join("");
//     t = t.split("").sort().join("")
//     console.log(s.split("").sort().join(""));
//     console.log(t.split("").sort().join(""));

//     if (s === t) {
//         return true;
//     } else {
//         return false;
//     }


// }

// console.log(anagramEx1("anagram", "nagaram"));//true
// console.log(anagramEx1("rat", "car"));//false
// console.log(anagramEx1("siva", "avis"));//true

//Method 3:-
// const anagramEx1 = function (s, t) {
//     if (s.length !== t.length) {
//         return false;
//     }

//     let obj1 = {};
//     let obj2 = {};
//     for (let i = 0; i < s.length; i++) {
//         // console.log(s[i]);
//         obj1[s[i]] = (obj1[s[i]] || 0) + 1;
//         // console.log(obj1[s[i]]);
//         obj2[t[i]] = (obj2[t[i]] || 0) + 1;
//         // console.log(obj2[t[i]]);
//     }

//     for (const key in obj1) {
//         // console.log(key);
//         // console.log(obj1[key]);
//         if (obj1[key] !== obj2[key]) return false;
//     }
//     return true;
// }


// console.log(anagramEx1("siva", "avis"));//true
// console.log(anagramEx1("siva", "avib"));//false