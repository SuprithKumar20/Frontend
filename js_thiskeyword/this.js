                                                //! THIS KEYWORD
// - In JS "this" is a special keyword which refers to current object.
// - this is a special keyword in JS which will point to current object.
// - we can change reference of this keyword by using there predefined functions they are

// // 1.call()
    // calls a function immediately
    // passes arguments one by one
// // 2.apply()
    // also calls a function immediately
    // passes arguments as an array
// // 3.bind()
    // does not call function immeditely
    // returns a new function with this bound
    // useful for creating a copy of the function
    // with fixed this and arguments.

// // without this keyword 
// let person{
//     fname:"virat",
//     lname:"kholi",
//     age:36,
//     place:"Mumbai",
//     detail:function(){
//         console.log("name is "+fname+""+lname+"age is "+age+"from"+place)
//     }
// }
// person.detail();

// // with this keyword 
// let person = {
//     fname:"virat",
//     lname:"kholi",
//     age:36,
//     place:"Mumbai",
//     detail:function(){
//         console.log("name is "+this.fname+" "+this.lname+" age is "+this.age+" from "+this.place)
//     }
// };
// person.detail();

                                                //! call()
// for this function first argument should be always object for which this is referred.second argument is fucntions aceepting argument
// // EX:
// var obj1={
//     c:100
// }
// var obj2={
//     c:500
// }
// function add(x,y){
//     console.log(x+y+this.c)
// }
// add.call(obj1,100,200)  //400

                                                //! apply()
// this apply fucntion it will be take two argument first argument is obejct second argument is array we can give function arguments inside the 
// array.
// // EX:
// var obj1={
//     c:100
// }
// var obj2={
//     c:500
// }
// function add(x,y){
//     console.log(x+y+this.c)
// }
// add.apply(obj1,[100,200])

                                                //! bind()

// the bind fucntion will return same function by changing referenace of this keyword.
// where as call() and apply() will not return any values.
//! SYNTAX:
// //              var fnName=<fnName>.bind(objName);
// //                  fnName()


// var obj1={
//     c:100
// }
// var obj2={
//     c:500
// }
// function fnAdd(x,y){
//     let z=x+y+this.c
//     console.log(z)
// }
// let fnadd=fnAdd.bind(obj1)
// fnadd(10,10)
// let fNadd=fnadd.bind(obj2,50,50)
// fnadd()
// fnadd.bind(obj2,5,5)()
// fnadd.bind(obj1)(10,10)


