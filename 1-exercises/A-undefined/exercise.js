/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
// Because inside the varible a we didn't put any value
let a;
console.log(a);

// Example 2
// we can't get anything because we need add return inside the body of function
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

// Example 3
// Because there is not anything inside function when we call it
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

// Example 4
// Our array length has just 0,1,2 . it means we don't hav arr[3]
let arr = [1, 2, 3];
console.log(arr[3]);
