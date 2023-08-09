//Synchronous & Asynchronous Code
//Promises is Asynchronous code

//Sync
// console.log("start");
// console.log("Hi");
// console.log("End");
//Output:- start Hi End
//Above example is of synchronous code which executes line by line.

//Async
// console.log("start");
// setTimeout(() => {
//     console.log("Hi");
// }, 1000);
// console.log("End");
//output:- start End Hi

//Why the above scenario happened?
//JS is a single threaded language. And it cannot execute setTimeout(Web API) in parallel with synchronous code. So it works like below statement 
//JS runs synchronous code first then only it executes Asynchronous code.

//setTimeout stimulates Async code.
//Learn Event loop

//Example

// console.log("Start");

// function importantAction(username) {
//     setTimeout(() => {
//         return `Subscribe to ${username}`;
//     }, 1000);
// }
// const message1 = importantAction("Siva");
// //Since the function has setTimeout fn. which is a async code. so it would be undefined at this moment.

// console.log(message1);

// console.log("End");
//Output:-
//Start
//undefined
//End

//To overcome the above issue, we are using callback.
//Callback:- When we pass a function as an argument inside another function it is known as callback function.

// console.log("Start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 1000);
// }
// importantAction("Siva", function(message){
//     console.log(message);//Subscribe to Siva
// });

// console.log("End");

//Example Mark:-
// console.log("Start");

// function importantAction(username, cb) {
//     setTimeout(() => {
//         cb(`Subscribe to ${username}`);
//     }, 1000);
// }

// function likeTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Like the ${video}`);
//     }, 1000);
// }

// function shareTheVideo(video, cb) {
//     setTimeout(() => {
//         cb(`Share the ${video}`);
//     }, 1000);
// }

// importantAction("Siva", function (message) {
//     console.log(message);//Subscribe to Siva
//     likeTheVideo("JS interview questions", (action) => {
//         console.log(action);//Like the JS interview questions
//         shareTheVideo("JS interview questions", (action) => {
//             console.log(action);//SHare the JS interview questions
//         })
//     })
// });
//Nesting of callbacks leads to pyramid like structure which is known as pyramid of doom or Callback hell.

// console.log("End");

//To overcome the issue of callback hell, Promises is used.

//Promises:- It represents the upcoming completion or a failure of an asynchronous event and its resulting value.
//Basic Example of Promise
// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//     const result = true;

//     setTimeout(() => {
//         if (result) resolve("Success");
//         else reject(new Error("Failed"));
//     }, 2000);
// })


// //.then would display the result if the promise is fullfilled otherwise catch will throw error if rejected. [res is response]
// sub
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// console.log("End");

//Mark example written through promise.
console.log("Start");

function importantAction(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 1000);
    })

}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${username}`);
        }, 1000);
    })
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${username}`);
        }, 1000);
    })
}

importantAction("Siva", function (message) {
    // console.log(message);//Subscribe to Siva
    // likeTheVideo("JS interview questions", (action) => {
    //     console.log(action);//Like the JS interview questions
    //     shareTheVideo("JS interview questions", (action) => {
    //         console.log(action);//SHare the JS interview questions
    //     })
    // })
});

console.log("End");