//! Syntax :
//!     array_name.foreach(element,index)=> {
//!     // code to be executed for each element
//!     }

// var fruits = ["apple", "banana", "orange"]
// fruits.forEach((fruit, index) => {
//     console.log(`Index: ${index}, Fruit: ${fruit}`)
// })

//? forEach function
// let data=[{name:"John",age:30},{name:"Jane",age:25},{name:"Doe",age:35}]
// data.forEach((data,index)=>{
//     console.log('index:'+index+' name:'+data.name+' age:'+data.age)
// })


//? MAP FUNCTION

// let emp =[{id:101,salary:10000},{id:102,salary:15000},{id:105,salary:20000}]
// let newarr=emp.map(function(ele,index){
//     ele.salary+=ele.salary*10/100
//     return ele.salary
// })
// console.log("original array",emp)
// console.log("salary after increment",newarr)


//? Filter function

// let person=[{name:"raj",age:40},{name:"ravi",age:30},{name:"raju",age:27},{name:"rajesh",age:50}]
// let newarr=person.filter(function(ele,index){
//     return ele.age>40
// })
// console.log("age greater than 40",newarr)


//? Reduce function
// let num=[1,2,3,4,5]
// let sum=num.reduce((prev,curr)=>{
//     s=prev+curr
//     return s/num.length
// })
// console.log("sum of array",sum)

//? Sort function
// let num=[5,2,8,1,4]
// num.sort((a,b)=>{
//     return a-b
// })
// console.log("sorted array",num)


// let emp =[{id:101,salary:10000},{id:102,salary:15000},{id:105,salary:20000}]
// emp.sort((a,b)=>{
//     return a.salary-b.salary
// })
// console.log("sorted array",emp)

//? toString function
// let num=[1,2,3,4,5]
// let str=num.toString()
// console.log("string value of array",str)


//? delete
// let num=[1,2,3,4,5]
// delete num[2]
// console.log("after deleting index 2",num)

//? isArray function
// let num=[1,2,3,4,5]
// let str="hello"
// console.log("is num an array?",Array.isArray(num))
// console.log("is str an array?",Array.isArray(str))

