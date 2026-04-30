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

