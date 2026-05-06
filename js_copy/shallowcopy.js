// a shallow copy is a copy o an object where only first level of the object is duplicated but the nested objects are not copied.


let original={
    name:"virat",
    address:{
        street:"3rd avenue",

    }
}
let shallowCopy=Object.assign({},original)
console.log(shallowCopy)
shallowCopy.name="raj"
console.log(shallowCopy.name)
console.log(original.name)
//change in nested object
shallowCopy.address.city="mysore"
console.log(shallowCopy.address.city)
console.log(original.address.city)


let numbers=[1,2,[3,4]]
let copyNumber=number.slice()
copyNumber[2][0]=99









// let num=[1,2,[3,4],5]
// let copynum=num.slice();

// console.log(copynum)
// copynum[3]=500
// console.log(copynum)
// console.log(num)
// copynum[2][1]=50

