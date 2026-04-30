                                        //! TEMPLATE LITERALS
// template literals are a way to work with strings in JS using backticks(``) instead of using single of double quotes
// they were introduced in ES6 (ECMAScript 2015)
// string interpolation:Embed expressions using ${}
// Multi-line strings :write strings across multiple lines naturally

                                        //! STRING INTERPOLATION
                                        
// //? old way(ES5)
// const name="hiney";
// const age=23;
// const oldway="my name is "+name+"and i am "+age+"years old";
// console.log(oldway);

// //? new way(ES6)
// const newway=`my name is ${name} and i am ${age} years old`;
// console.log(newway)
// // -----------------------------------------------------------------------------------------

// //EXPRESSIONS INSIDE
// //YOU CAN PUT ANY Js EXPRESSION INSIDE ${}

// const price=100;
// const tax=0.18;
// console.log(`tax is ${price +(price *tax)}`);
// //-----------------------------------------------------------
// // FUCNTION CALLS INSIDE ${}
// function getDiscount(){
//     return price*0.1;
// }
// console.log(`Discount ${getDiscount(price)}`);
// //-----------------------------------------------------------

// //TERNARY OPERATOR  
// const score=79;
// console.log(`result ${score>=50 ? 'pass' :'fail' }`)

// //-----------------------------------------------------------
// //Object property acces
// const user={
//     fname:"surya",
//     lname:'chandra',
//     age:28
// };
// console.log(`user:${user.fname} ${user.lname},Age:${user.age}`);
// -------------------------------------------------------------------------
// //Array methods inside ${}
// const numbers=[1,2,3,4,5,6]
// console.log(`sum :${numbers.reduce((a,b)=>a+b,0)}`);

// const items=['apple','banana','orange'];
// console.log("We have ${items.lenght} items:${items.join(',')}`);

// // -----------------------------------------------------------------------
                                //! MULTILINE STRINGS
                    
//OLD WAY   
// const oldwy="this is line 1\n"+"this is line 2\n"+"this is line 3";
// console.log(oldwy);

// //new way
// const newway=`this is line 1
// this is line 2
// this is line 3`;
// console.log(newway);

// ------------------------------------------------------------------------------



                                            //!SPREAD OPERATOR
                                        //! ...<object name>
                                        //! ...<array name>
// // it is used to copy properties of one object into another object and it is used to copy elements of one array into another.

// let obj={
//     user:"name",
//     age:29,

// }
// let obj2={
//     ...obj,
//     email:"email.com",
//     city:"banglore"
// }
// console.log(obj2)
// // ---------------------------------
// // for arry

// let arr=[1,2,3,4]
// let arr2=[...arr,5,6,7]
// console.log(arr2)

                                        //!DESCTRUCTING OF ARRAY OR OBJECT
// // it is a technique in JS to unpack properties or elements from object or array and assigning variables


// //! Object Destructuring

// const person={
//     name:"Deepak",
//     age:22,
//     city:"Bangalore"
// };

// // Old way
// const name=person.name;
// const age=person.age;
// const city=person.city;
// console.log(name, age, city);  // Deepak 22 Bangalore

// // New way using object destructuring
// const {name, age, city}=person;
// console.log(name, age, city);  // Deepak 22 Bangalore

// // You can also assign new variable names while destructuring
// const {name:personName, age:personAge, city:personCity}=person;
// console.log(personName, personAge, personCity);  // Deepak 22 Bangalore

// // --------------------------------------------------------------------------------------------------

// //! array-destructuring

// // Array destructuring is a convenient way to extract values from arrays and assign them to variables.
// // It was introduced in ES6 (ECMAScript 2015).

// //: Array Destructuring

// const arr=[1,2,3];
// // Old way
// const a=arr[0];
// const b=arr[1];
// const c=arr[2];
// console.log(a, b, c);  // 1 2 3

// // New way using array destructuring
// const [x, y, z]=arr;
// console.log(x, y, z);  // 1 2 3

                                        //!REST PARAMETERS

// Rest parameters allow a function to accept and indefinite number of arguments as an array and also it can applied for array or 
// obejct to store elemnts

// // for functions
// function greet(greeting,...names){
//     for (let name of names){
//         console.log(`${greeting},${name}`)
//     }
// }
// greet(`hello`,`how`,`are`,`you`)

// // for array
// const numbers=[1,2,3,4,5,6,7]
// const[first,second,...rest]=numbers
// console.log(first)
// console.log(second)
// console.log(rest)

// // fro objects
// var person={
//     name:"virat",
//     age:22,
//     city:"mumbai"
// }
// const{name,...data}=person
// console.log(name)
// console.log(data)
