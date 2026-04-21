//* retrive-value.js

let obj = {
    name:"Deepak C S",
    age:22,
    dept:"AIML",
    isLoggedIn:true,
    getdetails:function(){
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}
console.log(obj)
let values=Object.values(obj)
console.log(values)
console.log(obj.getdetails())