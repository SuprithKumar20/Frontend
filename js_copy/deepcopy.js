                            //! Deep Copy

// a deep copy means creating a new completely independent copy of an object (or array),including all of its nested object/arrays.
// in deep copy all the levels of the original 

// let original={
//     name:"virat",
//     address:{
//         city:"BEnagllur"
//     }
// }
// let deepcopy=JSON.parse(JSON.stringify(original))

// deepcopy.address.city="mysore"
// console.log(original.address.city)
// console.log(deepcopy.address.city)

// // deepcopy for array

// let numbers=[1,2,[3,4]]
// let deepCopyNumber=JSON.parse(JSON.stringify(numbers))

// deepCopyNumber[2][0]=99
// console.log(numbers)
// console.log(deepCopyNumber)