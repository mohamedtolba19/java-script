//1
// let str = "123" ;
// let number = Number(str) + 7 
// console.log(number)

//2
// let x = 1 ;
// if(!x){
//     console.log("invalid")
// }
// else{
//     console.log("valid")
// }

//3

// for(let i = 1 ; i<=10 ; i++){
//     if(i%2==0){
//         continue
//     }
//     else{
//         console.log(i)
//     }
// }

//4 
// let arr = [1,2,3,4,5];
// let filterArr = arr.filter((num)=>num%2==0);
// console.log(filterArr)

//5 
// let arr1 = [1,2,3];
// let arr2 = [4,5,6]
// let mergedArr =[...arr1 , ...arr2];
// console.log(mergedArr)

//6 
// let day = 1 ;
// switch(day){

// case 1 :
// console.log("sunday")
// break ;
// case 2 :
// console.log("monday")
// break ;
// case 3 :
// console.log("tuesday")
// break ;
// case 4 :
// console.log("wednesday")
// break ;
// case 5 :
// console.log("thrusday")
// break ;
// case 6 :
// console.log("friday")
// break ;
// case 7 :
// console.log("saturday")
// break ;
// default :
// console.log("please enter a valid number ")

// }

//7
//  let input= ["a", "ab", "abc"]
//  let output = input.map((e)=> e.length);
//  console.log(output)

//8
// let num = 10 ;
// function DivideBy (num){
//     if(num %3 ==0 && num %5 == 0){
//         console.log("Divisible by both")
//     }
//     else{
//         console.log("Not Divisible by both")
//     }

// }
// DivideBy(num)

//9

// let num = 5 ;

// let squareOf = (num)=> console.log(num*num)
// squareOf(num)

//10
// const person = {name: 'John', age: 25}
// const {name , age} = person ;
// console.log(`${name} is ${age} years old`)

//11

// let sum = (...numbers)=> numbers.reduce((total , num)=> total+num , 0)
// console.log(sum(1,5,7))

//12 

//  function fn(){
//     return new Promise((resolve , reject)=>{

//         setTimeout(() => {
//             resolve("Success")
//         }, 3000);

//     })

//  }

//  fn().then((msg)=>console.log(msg))

//13

// const findLargest = (arr) => {
//   let largest = arr[0];
//   for (const num of arr) {
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// };

// console.log(findLargest([1, 3, 7, 2, 4])); 

//14
// const getKeys = (obj)=> Object.keys(obj);
// console.log(getKeys({ name: "John", age: 30 }))

//15 
// const splitWords = (str)=> str.split(" ") ;

// console.log(splitWords("The quick brown fox"))


// ----------------------------------------------------------------------------------
// //  1-
// Both loop over the items of an array (or other iterable), but they work differently.

// forEach is an array method that takes a callback function and runs it once per element

// const numbers = [1, 2, 3];

// numbers.forEach((num, index) => {
//   console.log(index, num);
// });
// // 0 1
// // 1 2
// // 2 3

// for...of is a loop statement that gives you each value directly.

// for (const num of numbers) {
//   console.log(num);
// }
// // 1
// // 2
// // 3

// When to use each

// Use forEach when:

// You want to run a simple action on every element (logging, updating the DOM).
// You will definitely process the whole array.
// You like the short, functional style.

// Use for...of when:

// You might need to stop early with break, skip with continue, or return from the surrounding function.
// You are using await inside the loop.
// You are looping over strings, Maps, Sets, or other non-array iterables.

// //2
// Hoisting is JavaScript’s behavior of registering declarations before any code runs. Before executing a scope, the engine scans it and sets up the variables and functions declared there. It looks as if the declarations were “moved to the top,” although the code itself doesn’t move.

// Hoisting with var

// var declarations are hoisted and automatically initialized to undefined.

// console.log(name); // undefined (no error)
// var name = "John";
// console.log(name); // "John"

// Hoisting with functions

// Function declarations are hoisted completely (name and body), so you can call them before they appear in the code.

// sayHi(); // "Hi!"

// function sayHi() {
//   console.log("Hi!");
// }


// Function expressions are not hoisted the same way. Only the variable is hoisted, following the rules of var, let, or const.

// greet(); // TypeError: greet is not a function

// var greet = function () {
//   console.log("Hello");
// };

// Here greet is undefined at the time of the call, so calling it throws a TypeError.

// Hoisting with let and const

// let and const are also hoisted, but they are not initialized to undefined. They stay uninitialized until the line where they are declared. That gap is the TDZ.

// Temporal Dead Zone (TDZ)

// The TDZ is the period from the start of a scope until the let/const declaration is executed. Accessing the variable during this period throws a ReferenceError.

// {
//   // TDZ for "age" starts here
//   console.log(age); // ReferenceError: Cannot access 'age' before initialization
//   // TDZ still active
//   let age = 25;     // TDZ ends here
//   console.log(age); // 25
// }

//3
// == (loose equality) compares values after converting them to the same type.

// === (strict equality) compares values without converting types. Both the value and the type must match.
// 5 == "5";    // true  (the string is converted to a number)
// 5 === "5";   // false (number vs string)

//4
// How try-catch works:

// Code inside try runs normally.
// If an error is thrown, JavaScript jumps straight to catch, which receives the error.
// An optional finally block always runs afterward, whether or not there was an error.

// try {
//   JSON.parse("not json");
// } catch (error) {
//   console.log("Something went wrong:", error.message);
// } finally {
//   console.log("Done");
// }
// Why it matters in async code:

// A promise that fails (rejects) does not throw an error in the normal way. A plain try-catch around .then() will not catch it. With async/await, though, await turns a rejected promise into a thrown error, so try-catch works:

//5

// Type conversion (explicit): you convert the type on purpose, using a function or method.

// javascript
// Number("5");      // 5
// String(123);      // "123"
// Boolean(0);       // false
// parseInt("42px"); // 42

// Type coercion (implicit): JavaScript converts the type automatically, without you asking.

// javascript
// "5" * 2;      // 10   (string becomes a number)
// "5" + 2;      // "52" (number becomes a string)
// 5 == "5";     // true (string becomes a number)
// if ("hello") {} // runs (string becomes true)