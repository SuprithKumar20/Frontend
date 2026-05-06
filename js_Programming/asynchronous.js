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


                                        //! PROMISE IN JS

// these are the way to handle the asynchronous operations.
// a promise is a JS object that links producing code and consuming the code that represent a value 
// may be available now or in the ufture or never

// // The promise obejct can be in any 3 states:
// 1.pending
// 2.fulfilled
// 3.rejected


//                                         promises
//                                             |
//                                             |
//     ---------------------------------------------------------------------------
//     |                                        |                                |   
// fulfilled                               pending                            rejected
//     |                                                                         |
// resolved()                                                                 reject()
//     |                                                                         |
//   then()                                                                    catch()


//!creating a promise

// let promissDemo=new Promise((resolve,reject)=>{
//     if(false){
//         resolve("promise resolved succeffully")
//     }else{
//         reject("promise rejected")
//     }
// });

//!Handling a promise
// proimiseDemo.then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });


                                                //! FETCH()
// fetch is a method which works internally as a promise .fetch method is used to make a netwrok request or to call a API in JS.
// fetch will return a promise in JS.

// fetch('https://fakestoreapi.com/products/1')//make api call
// .then((res)=>res.json())//return promise fullfill
// .then((jsondata)=>{
//     console.log(jsondata)
// })//fulfill
// .catch((error)=>{
//     console.log(error+"promise failed")
// })//rejected

                                    // ! async and await
// // async:
// declare a function or method as asynchronous and can pause its execution to wait for completion of other process.

// // await:
// make a suspension pont where exceution may wait for the result of async function or methods.


async function fun1(){
    //fetch the data from the URL
    let response =await fetch("'https://fakestoreapi.com/products/1");
    //convert the response to json
    let jsonData=await response.json();
    //Log the Json data
    console.log(jsonData);
    //You can also assign jsonData to a varaiable if you want to use it later
    let result =jsonData;
    //log the result
    console.log(result);
    //call the asyn fucntion
}
fun1();