//! ASYNCHRONOUS PROGRAMMING
//- Asynchronous pgm in JS is a non-blocking execution model where long-running tasks can be executed in the background
//  without blocking the main thread.Means while other operations can continue to run.
//- asynchronous pgm is used with long-running tasks like network requests,file operations ,timers,etc.

// // NOTE:
// -In JS asynchronous programming execution take care by the event loop.
// -Event loop is part of the js runtime environment it is not part of js engine
// -in js setTimeout and setINterval are the built-in fucntions that allow us to perform asynchronous operations.
// but we can alos use Promises,asyn/await for btter handlinh of asyn
// -Asynchronous pgm can be done by using timers,promises,async and await.

// // EX:
// console.log("start")
// function demo(){
//     setTimeout(function(){
//         console.log("demo function is running")
//     },2000);
// }
// demo();
// console.log("end")