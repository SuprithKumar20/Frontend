//* 12-foreach.js

// if we want to access each element of an array, we can use the foreach() method

var arr=[{name:"deepak",age:23},
         {name:"suprith",age:24},
         {name:"chaulva",age:25},
         {name:"ujwal",age:26}]


arr.forEach(function(element,index){
    console.log(index,element.name ,element.age)
})

arr.forEach(function(element,index){
    console.log(index,element)
})


