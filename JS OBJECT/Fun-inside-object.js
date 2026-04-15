//* Adding the function inside the object

let person={
    name:"Deepak C S",
    age:22,
    gender:"Male",
    getDetails:function(){
        return `My name is ${this.name} and I am ${this.age} years old.`;
        }

}
console.log(person)
console.log(person.getDetails())
y=person.getDetails()
console.log(y)