// var person={
//     name:'virat',
//     age:22,
//     height:"male",
//     city:"mumbai",
//     play:function(){
//         console.log(this.name+"is playing cricket")
//     },
//     gender:"male"
// }
// console.log(person.name) // virat
// console.log(person.age) // 22
// console.log(person.height) //
// person.play() // viratis playing cricket


// // to retreive  key and value
// var person={
//     name:'virat',
//     age:22,
//     height:"male",
//     city:"mumbai",
//     play:function(){
//         console.log(this.name+"is playing cricket")
//     },
//     gender:"male"
// }

// // to retreive  key
// var keys=Object.keys(person)
// console.log(keys) // [ 'name', 'age', 'height', 'city', 'play', 'gender' ]

// // to retreive values
// var values=Object.values(person)
// console.log(values) // [ 'virat', 22, 'male', 'mumbai', [Function: play], 'male  ]

// // Object seal method
// let user={
//     name:"virat",
//     age:22,
//     city:"mumbai",
// }
// Object.seal(user) // it will not allow to add new properties but we can modify existing properties
// user.name="rohit" // we can modify existing properties
// console.log(user) // { name: 'rohit', age: 22, city: 'mumbai' }
// user.country="india" // we cannot add new properties
// console.log(user) // { name: 'rohit', age: 22, city: 'mumbai' }


// // Object Assign is a method that copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
// const target={a:1}
// const source={b:2,c:3}
// Object.assign(target,source)
// console.log(target)

// // object entries is a method that returns an array of a given object's own enumerable string-keyed property [key, value] pairs, in the same order as that provided by a for...in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
// const person={
//     name:"virat",
    // age:22,
//     city:"mumbai",
// }
// const entries=Object.entries(person)
// console.log(entries) // [ [ 'name', 'virat' ], [ 'age', 22 ], [ 'city', 'mumbai' ] ]


// // Object freeze is a method that freezes an object. A frozen object can no longer be modified: new properties cannot be added, existing properties cannot be removed, and existing properties (or their enumerability, configurability, or writability) cannot be changed. In essence the object is made effectively immutable. The method returns the object that was passed in.
// const user={
//     name:"virat",
//     age:22,
//     city:"mumbai",
// }
// Object.freeze(user) // it will not allow to modify existing properties and add new properties
// user.name="rohit" // we cannot modify existing properties
// console.log(user) // { name: 'virat', age: 22, city: 'mumbai' }
// user.country="india" // we cannot add new properties
// console.log(user) // { name: 'virat', age: 22, city: 'mumbai' }

