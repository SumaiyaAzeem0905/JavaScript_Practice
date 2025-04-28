function myFunction(num1,num2){
    console.log(num1+num2);
    }
myFunction(5,6)
myFunction(5,"6")
myFunction("5",6)



function myFunction2(num1,num2){
    let result=num1+num2;
    return result; // return statement is used to return a value from a function. If no return statement is used, the function returns undefined.
   // console.log("This will not be printed because the function has already returned a value.");
    // return is used to exit the function and return a value to the caller.
    }
const result=myFunction2(5,6) // function call
console.log(result); // 11




function userLogin(userName){
    return`Hello ${userName}, welcome to the website!` // Template literals are used to create multi-line strings and string interpolation.
}
userLogin("Sumaiya") // function call
console.log(userLogin("Sumaiya")); // Hello Sumaiya, welcome to the website!
console.log(userLogin()); // Hello undefined, welcome to the website! // if no argument is passed, it will return undefined in the template literal.
console.log(userLogin("")); // Hello , welcome to the website! // if empty string is passed, it will return empty string in the template literal.


function loginFunction(userName){
    if(userName===undefined){ // we can also write as if(!username)// if both userName and password are truthy values, then return true.
        return ; // if userName is undefined, then return undefined.
    }
    
}
console.log(loginFunction("Sumaiya"));


/*******************************************************************************************************************/

function calculateprice(...num1){ // ...num1 is a rest parameter, which allows us to pass any number of arguments to the function as an array.
    return num1
}
console.log(calculateprice(10,20,30,40));  



function calculateprice(val1,val2,...num1){ // 1st value in val1, 2nd value in val2 and rest of the values in num1.
    return num1 
}
console.log(calculateprice(10,20,30,40)); 

// defining object in function

const person={
    name:"Sumaiya",
    age:20,
    isRegistered:true
}

function myFunction3(anyobject){// object is passed as an argument to the function.
    console.log(`${anyobject.name} is ${anyobject.age} years old and is registered: ${anyobject.isRegistered}`); // Template literals are used to create multi-line strings and string interpolation.
}
myFunction3(person)

myFunction({
    name:"Sumaiya",
    age:20,
    isRegistered:true
})


//Arrays in function
const myArr=[1,2,3,4,5]
function myFunction4(arr){ // array is passed as an argument to the function.
    return arr; // [1, 2, 3, 4, 5]
}
console.log(myFunction4(myArr)); // [1, 2, 3, 4, 5]
