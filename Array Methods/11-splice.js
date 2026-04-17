//* 11-splice

//: The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

var array=["dcs","deepak",13,"cec"]
console.log(array)                  // ["dcs","deepak",13,"cec"]
console.log(array.splice(1,2))      // ["deepak",13]
console.log(array)                  // ["dcs","cec"]

var arr=[0,1,2,3,4,5,6,7,8,9]
console.log(arr)
var arr1=arr.splice(3,5)
console.log(arr1)