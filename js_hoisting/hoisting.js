                                    //!HOISTING
// Hoisting is js default behaviour of moving variable and function declarations to the top of their scope before execution.
// Works with var (hoisted but undefined ) and function declarations(hoisting with definition)
// let and const are hoisted but remain in the temporal dead zone
// both variable and function are hoisted but behave differently.  

                                    //! How it works internally
//! when JS engine starts
// // 1.First Phase(memory creation phase)
// -it scans the code
// -it creates memeory space for variables and fucntion varaiable declarations are set to undefined
// -Function declaration are fully hoisted (entire function definition)
// // 2 second phase
// -code runs line by line

// console.log(a)//undefined
// var a=10
// console.log(a)

// var b
// console.log(b)//undefined
//                                     //! Hoisting for let and const
// let and const are also hoisted but kept in(TDZ)temporal dead zone a period where the variable exixts but in
// not accesible until its initialized

// let b=20
// console.log(b)

// console.log(c)//Referenace error

                                        //!Hoisring for function

// // Entire function greet is hoisted so you can call it before declaration
// greet()
// function greet(){
//     console.log("good morning")
// }

sayHello()//Type error
var sayHello=()=>{
    console.log("hello world")
}
sayHello()
