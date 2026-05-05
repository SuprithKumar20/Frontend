                                            //!    try/catch/finally
// //- whenever we feel some part of the code may cause problems we must enclodse the part of the code with in the try.
// //- so if any problems occur try is designed in such a way that it throws the exception object outside which later will be caught by the catch() by
// //  using try-catch syntax we can avoid our programs getting terminated abruptly.

// // EX 1:

// try{
//     var num=20;
//     fname="virat"
//     console.log("num"/num)
//     console.log(fname)
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("finally executed")
// }

// // EX 2:
// try{
//     var num=20
//     var fname="sachin"
//     throw new Error ("product id not found")
// }
// catch(err){
//     console.log(err)
// }
// finally{
//     console.log("finally executed")
// }


