// Immediately Invoked Function Expression (IIFE)
// This is a common JavaScript pattern that allows you to execute code immediately
// without having to define a function and call it later. It helps in avoiding global scope pollution.
 
// Named IIFE
(function helloo(){
    console.log("Hello World");
// Simple IIFE 
})() ; //must declare semicolon if declaring one more iife after this // IIFE

( ()=>{
    console.log("Hello Sumaiya");
}) () ;// without semicolon for first iife this will not work.


// IIFE with parameter
( (name)=>{
    console.log(`Hello ${name}`);
    
}) ("Sumaiya"); // IIFE with parameter 