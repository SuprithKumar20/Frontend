                                    // ! Closure in JS
// -it is a technique to access of outer function varaiable inside inner function
// -it is fucntion to define function inside another function
// -A closure can be defined as a JS feature in which the inner function has access to outer function varaiablke,JS
// every time a clousre is created with the creation of function.

// the closure has three scope:
// 1.access to ites oqn scope
// 2.access to the variable of outer function
// 3.access to the global function
//! syntax:
//         function outer(){
//             // ------------------------
//             // -------------------------
//             function inner(){
//                 // ---------------------
//                 // -----------------------
//             }
//             return inner
//         }

// // ex:
// function Outer(){
//     var city="banglore"
//     console.log("outerfunction "+city)
//     function inner(x,y){
//         var result=x+y
//         console.log(result)
//         console.log("inner function "+city)
//     }
//     return inner
// }
// var res=Outer()
// res(10,20)