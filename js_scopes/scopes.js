                                //!SCOPE IN JS
// scope refers to the accessibility scope can be used for functions and variables.
// there are 3 scopes in JS:
// 1.global scope
// 2.function scope
// 3.lexical scope
                                //!Global scope

// if any functions or  variables or class not defined inside the block({})then they are said to be in global scope.any

// var city="mysore"
// function fun1(){
//     console.log(city)
// }
// fun1()

                                //!Function scope
// any thing which is defined inside function scope those thing we can access only isnide funcion scope

// function f1(){
//     var name="virat"
//     function fn(){
//         console.log(name)
//         console.log("Fn is creatd")
//     }
//     console.log(name)
//     return fn
// }
// console.log(name) //error
// f1()
// fn()//error 

                                 //! var keyword
// function fun1(){
//     var name="virat"
//     if (true){
//         console.log(name)//virat
//     }
//     else{
//         var city="banglore"
//         console.log(name)
//     }
//     console.log(city)//undefined
// }
// fun1()

                                //!Lexical scope
// lexical scope means that scope is determined by where variables and blocks are written in the code means inner scopes can acces
// variable from their outer scope

// function outr(){
//     let a=10
//     function inner(){
//         console.log(a)//can access a because of lexical scope
//     }
//     inner()
// }
// outer()





// | Keyword   | Reassign | Redeclare | Hoisted                          | Global Scope | Function Scope |
// | --------- | -------- | --------- | -------------------------------- | ------------ | -------------- |
// | **var**   | Yes      | Yes       | Yes (initialized as `undefined`) | Yes          | Yes            |
// | **let**   | Yes      | No        | Yes (TDZ - Temporal Dead Zone)   | No           | Yes            |
// | **const** | No       | No        | Yes (TDZ - Temporal Dead Zone)   | No           | Yes            |




