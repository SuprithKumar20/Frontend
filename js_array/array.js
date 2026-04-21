// //? Array are a kind of data structure that can hold multiple values in a single variable. They are used to store collections of data
// //?  and provide various methods to manipulate and access that data. In JavaScript, arrays are dynamic, meaning they can grow and
// //? shrink in size as needed.

//!to create an array

//var arr_name=[10,true,{city:"banglore",pin:560026}]
// var fruits=["apple","banana","orange"]
// console.log(fruits) // [ 'apple', 'banana', 'orange' ]


//! by using array constructor
// syntax:
// var array_name=new Array()
// or
// let
// or
// const
// let array =new Array ("raj",true,100,56,false)
// console.log(array)

// var arr = [1, "sachin", true, 56.78, { name: "sachin", age: 48 }]
// console.log(arr[3]) // 56.78
// console.log(arr[4].name) // sachin
// console.log(arr[4]) // { name: 'sachin', age: 48 }


// var arr1 = [10, 20, 30, 40, 50]
// console.log(arr1.length) // 5
// var arr2 = [10, true, "emqil", { city: "banglore", pin: 560026 }]
// console.log(arr2.length) // 4

// //! 2D array
// var arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// console.log(arr3[0][1]) // 2
// console.log(arr3[1][2]) // 6
// console.log(arr3[2][0]) // 7

// //! Array Methods
// var fruits = ["apple", "banana", "orange"]
// //? Push
// fruits.push("grape") // adds grape to the end of the array
// console.log(fruits) // [ 'apple', 'banana', 'orange', 'grape' ]
// //?  POP
// fruits.pop() // removes the last element from the array
// console.log(fruits) // [ 'apple', 'banana', 'orange' ]
// //? UNSHIFT
// fruits.unshift("mango") // adds mango to the beginning of the array
// console.log(fruits) // [ 'mango', 'apple', 'banana', 'orange' ]
// //? SHIFT
// fruits.shift() // removes the first element from the array
// console.log(fruits) // [ 'apple', 'banana', 'orange' ]
// //? INDEXOF //gives the index of the first occurrence of a specified element in the array, or -1 if it is not found.
// console.log(fruits.indexOf("banana")) // 1
// console.log(fruits.indexOf("grape")) // -1 (not found)
// console.log(fruits.indexOf("orange")) // 2

// //? lastindexOf
// var numbers = [1, 2, 3, 2, 4]
// console.log(numbers.lastIndexOf(2)) // 3 (last occurrence of 2 is at index 3)
// console.log(numbers.lastIndexOf(5)) // -1 (not found)
// console.log(numbers.lastIndexOf(1)) // 0 (last occurrence of 1 is at index 0)

// //? join()
// var fruits = [10,"banana",true,15.55,"virat","y"]
// console.log(fruits.join()) // 10,banana,true,15.55,virat,y
// console.log(fruits.join(" ")) // 10 banana true 15.55 virat y
// console.log(fruits.join(" $")) // 10 $banana $true $15.55 $virat $y

// //? includes()
// var fruits = ["apple", "banana", "orange"]
// console.log(fruits.includes("banana")) // *true
// console.log(fruits.includes("grape")) // *false

// //?  reverse()
// var fruits = ["apple", "banana", "orange"]
//  console.log(fruits.reverse()) //*[ 'orange', 'banana', 'apple' ]

// //? slice() // doe not alter the original array

// let arr = [10, 20, 30, 40, 50]
// console.log(arr.slice(1, 4)) //* [ 20, 30, 40 ] (from index 1 to index 3)
// console.log(arr.slice(2)) //* [ 30, 40, 50 ] (from index 2 to the end)
// console.log(arr.slice(0, 3)) //* [ 10, 20, 30 ] (from index 0 to index 2)
// console.log(arr)

//? splice()  //alters the original array

// var fruits = ["apple", "banana", "orange", "grape"]
// s=fruits.splice(1, 2) //* removes 2 elements starting from index 1
// console.log(fruits) //* [ 'apple', 'grape' ]
// console.log(s) //* [ 'banana', 'orange' ] (the removed elements)
