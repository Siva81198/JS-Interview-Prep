//Debounce and Throttling are the  two ways to optimize event handling in JS.
//Debounce:- Optimize how we call certain events.
//Throttling:- It is a technique to limit the execution of an event handler function. Even if user action is happening continously.

//Ques 1:- Create a button UI and add debounce as follow =>
//         -->Show "Button Pressed <X> Times" every time button is pressed.
//         -->Increase "triggered <Y> Times" count after 800ms of debounce

// const btn = document.querySelector(".increment_btn");
// const btnPressed = document.querySelector(".increment_pressed");
// const btnTriggered = document.querySelector(".increment_count");
// console.log(btn);

// let btnPressCount = 0;
// let btnTriggerCount = 0;

// const debouncedCount = _.debounce(() => {
//   btnTriggered.textContent = ++btnTriggerCount;
// }, 800);

// btn.addEventListener("click", function () {
//   console.log("button Clicked");
//   btnPressed.textContent = ++btnPressCount;
//   debouncedCount();
//   //Above function would be triggered after 800ms of gap between the button press.
// });

//Ques 2:- Create a button UI and add throttle as follow =>
//         -->Show "Button Pressed <X> Times" every time button is pressed.
//         -->Increase "triggered <Y> Times" count after 800ms of throttle

// const btn = document.querySelector(".increment_btn");
// const btnPressed = document.querySelector(".increment_pressed");
// const btnTriggered = document.querySelector(".increment_count");
// console.log(btn);

// let btnPressCount = 0;
// let btnTriggerCount = 0;

// const throttleCount = _.throttle(() => {
//   btnTriggered.textContent = ++btnTriggerCount;
// }, 800);

// btn.addEventListener("click", function () {
//   console.log("button Clicked");
//   btnPressed.textContent = ++btnPressCount;
//   throttleCount();
//   //Above function would be triggered only after every 800ms.
// });

//new Date().getTime() --> In ms

//PolyFills for Debounce
// const myDebounce = (cb, d) => {
//   let timer;
//   return function (...args) {
//     if (timer) clearTimeout(timer);
//     console.log("In");
//     timer = setTimeout(() => {
//       console.log("Inside Timer");
//       cb(...args);
//     }, d);
//   };
// };

//PolyFills for Throttle
// const myThrottle = (cb, d) => {
//   let lastTime = 0;
//   return function (...args) {
//     let nowTime = new Date().getTime();
//     if (now - last < d) return;
//     last = now;
//     return cb(...args);
//   };
// };