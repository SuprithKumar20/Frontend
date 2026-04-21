//* seal-object.js

let person={
    name:"Deepak C S",
    age:22,
    dept:"AIML",
    isLoggedIn:true,
    getdetails:function(){
        return `My name is ${this.name} and I am ${this.age} years old.`
    }
}
console.log(person)
Object.seal(person)         //: it will only allow to update the existing properties but not add or delete any property
person.name="Deepak Kumar"  //: it will update the name property because the object is sealed
console.log(person)
delete person.age           //: it will not delete the age property because the object is sealed
console.log(person)