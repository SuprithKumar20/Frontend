// example for functions
// // function definition
// function greet(name) {
//     return "Hello, " + name + "!";
// }
// // function invocation
// console.log(greet("Alice")); // Hello, Alice!   


// // Named function
// function myfunction() {
//     console.log("This is a named function");
// }
// myfunction() // This is a named function

// // Parameter functions

// function name(a, b,c) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
// }
// name(1, 2) // 1 2

// // return function
// function function name() {
//     return "welcome"    
// }
// console.log(name()) // welcome

// // parametrized  return function
// function greet(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Alice")); // Hello, Alice!

// // normal anonymous function
// var greet = function() {
//     console.log("Hello, World!");
// }
// greet() // Hello, World!

// // parameterized anonymous function
// var greet = function(name) {
//     console.log("Hello, " + name + "!");
// }
// greet("Alice") // Hello, Alice!

// // return anonymous function
// var greet = function(name) {
//     return "Hello, " + name + "!";
// }
// console.log(greet("Alice")) // Hello, Alice!

// // parameterized return anonymous function
// var greet = function(name) {
//     return "Hello, " + name + "!";
// }   
// console.log(greet("Alice")) // Hello, Alice!


// callback function higher order function

// function print(){
//     console.log("Hello, World!");
// }
// function add(x,y){
//     let z=x+y;
//     console.log(z);
// }
// function fun(f){
//     f();
// }
// fun(print)
// fun(add(3,3)) // Hello, World!



// function fun(f) {
//     let y = f(10, 20)
//     console.log(y)
// }
// fun (function (a, b)) {
//     return a * b
// }

// let fun = (x,y) => x+y
// console.log(fun(10,20)) // 30


// let fun2 = (x,y) => 40+10
// console.log(fun2()) // 50


// let fun3 = (f) => {
//     console.log(f(10, 20))
// }
// fun3((x,y) => x+y)



// // Immediately Invoked Function Expression (IIFE)
// (function() {
//     var a=100
//     var b=200
//     console.log(a+b) // 300
// })()

// (function (name,age,city) {
//     console.log("Name: " + name, "Age: " + age, "City: " + city)
// })('virat', '30', 'delhi') // Name: virat Age: 30 City: delhi

