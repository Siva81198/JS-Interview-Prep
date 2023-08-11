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

// for (var i = 1; i <= 5; i++) {
//     function disp(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     disp(i);
// }

//Closure Demo with Callback Function:-
// function attachEventListeners() {
//   let count = 0;
//   document.getElementById("clickMe").addEventListener("click", () => {
//     console.log("Button Clicked", ++count);
//   });
// }

// attachEventListeners();

function a(){
  console.log("a");
}
a();
console.log("End");