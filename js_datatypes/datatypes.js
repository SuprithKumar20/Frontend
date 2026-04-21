// var num=24
// let n=90.000
// console.log(num)

// boolean`
// let isTrue = true
// console.log("course",isTrue)



// undefined
// var a 
// console.log(a)


// null
// let b = null
// console.log(b)


// // string
// var name = "John Doe"
// console.log(name)       


// // bigint
// let bigIntNum = 1234567890123456789012345678901234567890n;
// console.log(bigIntNum)
// console.log(typeof bigIntNum)

// // arithmetic operatiopn on bigint
// let bigIntNum1 = 1234567890123456789012345678901234567890n;
// let bigIntNum2 = 9876543210987654321098765432109876543210n;
// console.log(bigIntNum1 + bigIntNum2) 

// we cannot perform arithmetic operations between bigint and number
// let num = 10
// // console.log(bigIntNum1 + num) // TypeError: Cannot mix BigInt and other types, use explicit conversions

// symbol
// let sy1=Symbol("id1")
// let sy2=Symbol("id1")
// console.log(typeof sy1)

// non primitvie data types

// object
let person = {
    name: "John",
    age: 30,}
console.log(person)
console.log(typeof person)

// array
let arr = [1, 2, 3, 4, 5]
console.log(arr)   
console.log(typeof arr) // typeof array is object 

let a= null
console.log(a)
console.log(typeof a) // typeof null is object (this is a known quirk in JavaScript)

// why null is given as obejct in JavaScript is a historical bug that dates back to the early days of the language. When JavaScript was first created, values were represented in a way that included a type tag. The type tag for objects was 0, and null was represented as a value with a type tag of 0 as well. This led to null being classified as an object type.