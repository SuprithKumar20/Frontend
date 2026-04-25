// //!     JAVASCRIPT STRINGS
// //? collection of chaaracters used to represent text in JavaScript. Strings are enclosed in either single quotes (' '), double quotes (" "),
// //? or backticks (` `) for template literals. They can contain letters, numbers, symbols, and whitespace characters. Strings are immutable,
// //? meaning that once created, they cannot be changed. However, you can create new strings by concatenating existing ones or using string methods.

// var str     = "Hello, World!"; // Using double quotes
// var str2   = "hello"; //valid
// var str3   = World!; //invalid

// //? String concatination
// var str1 = "Hello, ";
// var str2 = "World!";
// console.log(str1 +" " + str2); // Output: Hello, World!

// //?  length of string
// var str = "Hello, World!";
// console.log(str.length); // Output: 13

// //!          STRING METHODS 

// //? charAt()        // Returns the character at a specified index
// var str= "Hello, World!";
// console.log(str.charAt(0)); // Output: H

// //? toLowerCase()   // Converts a string to lowercase letters
// var str2 = "HELLO, WORLD!";
// console.log(str2.toLowerCase()); // Output: hello, world!

// //? toUpperCase()   // Converts a string to uppercase letters
// var str3 = "hello, world!";
// console.log(str3.toUpperCase()); // Output: HELLO, WORLD!

// //? substring()      // similar to slice Extracts a portion of a string between specified indices
// var str4 = "Hello World!";
// console.log(str4.substring(0, 5)); // Output: Hello
// console.log(str4.substring(2)); // Output: llo World!
// console.log(str4.substring(-2)); //? Output: Hello World! (negative index is treated as 0)

////? slice()         // Extracts a portion of a string between specified indices and returns it as a new string
// ! Syntax:
// // slice(startIndex, endIndex)
// // slice(startIndex)

// var str5 = "Hello World";
// console.log(str5.slice(0, 5)); // Output: Hello
// console.log(str5.slice(2)); // Output: llo World
// console.log(str5.slice(-5)); // Output: World (negative index counts from the end of the string)

// //?replace()      // Replaces a specified value with another value in a string
// var str6 = "Hello Hello World!";
// console.log(str6.replace("World", "JavaScript")); // Output: Hello, JavaScript!
// console.log(str6.replace("Hello", "Hi")); // Output: Hi Hi World! (using regular expression with global flag to replace all occurrences of "Hello")

// //? replaceAll()   // Replaces all occurrences of a specified value with another value in a string
// var str7 = "Hello Hello World!";
// console.log(str7.replaceAll("Hello", "Hi")); // Output: Hi Hi World!

// //? trim()          // Removes whitespace from specified ends of a string
// var str8 = "   Hello, World!   ";
// console.log(str8.trim()); // Output: "Hello, World!"
// cinsole.log(str8.trimStart()); // Output: "Hello, World!   "
// console.log(str8.trimEnd()); // Output: "   Hello, World!"

// //? concat()         // Concatenates two or more strings and returns a new string
// var str9 = "Hello, ";
// var str10 = "World!";
// console.log(str9.concat(str10)); // Output: Hello, World!
