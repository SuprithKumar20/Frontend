//* retrive-key

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
let keys=Object.keys(obj)
console.log(keys)