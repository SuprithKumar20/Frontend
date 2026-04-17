//* 10-slice

//! SYNTAX:
//!  .slice(starting index)
//!  .slice(starting index, ending index)

//: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
//:  The original array will not be modified.

var array=["dcs","deepak",13,"cec"]
console.log(array.slice(0,2))  // ["dcs","deepak"]
console.log(array.slice(1,3))  // ["deepak",13]
console.log(array.slice(2,4))  // [13,"cec"]
console.log(array.slice(1))  // ["deepak",13,"cec"]