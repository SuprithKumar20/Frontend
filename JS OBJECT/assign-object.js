//* assign-object.js

//! Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. 
//! It will return the target object.

let obj1={
    name:"Deepak C S",
    age:22,
    dept:"AIML"
}
let obj2={
    name:"Deepak CS",
    isLoggedIn:true,
    getdetails:function(){
        return `My name is ${this.name} and I am ${this.age} years old.`
    }   
}
console.log(obj1)
console.log(obj2)
Object.assign(obj1,obj2)    //:it will merge the obj2 properties into obj1
console.log(obj1)           //:it will print the merged object