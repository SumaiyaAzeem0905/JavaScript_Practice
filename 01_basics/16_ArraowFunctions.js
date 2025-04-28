const user={
userName:"Sumaiya",
userAge:20,
welcome:function(){
    console.log(`Hello ${this.userName}, welcome to the website!`); // this is used to access the object inside the function
    console.log(this); // this refers to the object that is calling the function.
    
}

}
user.welcome() // Hello Sumaiya, welcome to the website!
user.userName="Azeem"
user.welcome() // Hello Azeem, welcome to the website! // this is used to access the object inside the function
console.log(this); // {}  //this refers to the global object in the browser and window object in node.js
// In browser this refers to the window object, which is the global object in the browser. In Node.js, this refers to the module object, which is the global object in Node.js. In strict mode, this is undefined.


function testThis(){
    let user="Sumaiya"
    console.log(this.user); // undefined   
}
testThis() // undefined
// In the above example, this refers to the global object in the browser and window object in node.js. In strict mode, this is undefined.


const testThis2 = function(){
    let user="Sumaiya"
    console.log(this.user); // undefined
    
}
testThis2() // undefined




//Arrow function declaration
const testThis1 = ()=>{
    let user="Sumaiya"
    console.log(this.user); // undefined
    console.log(this); //{}
}
testThis1() // undefined

//basic arrow function
const addTwoNums=(n1,n2)=>{
    return n1+n2
}
console.log(addTwoNums(5,6)); // 11

//implicit return arrow function

const addTwoNums1=(n1,n2)=>n1+n2 // implicit return
console.log(addTwoNums1(5,6)); // 11

const addTwoNums2=(n1,n2)=>(n1+n2) // implicit return
console.log(addTwoNums2(5,6)); // 11


// If you want to return object in arrow function, you need to wrap the object in parentheses.

const addTwoNums3=(n1,n2)=>({name:"Sumaiya",age:20}) // implicit return
console.log(addTwoNums3(5,6)); // { name: 'Sumaiya', age: 20 }




// Conclusion:
//  Arrow functions are not hoisted, so you cannot call them before they are defined.
//  They are also not suitable for methods that require their own this context, such as object methods or class methods. 
// Arrow functions are best used for short, simple functions that do not require their own this context.
//  They are also useful for passing functions as arguments to other functions, such as in array methods like map, filter, and reduce.
// main difference between regular functions and arrow functions is that arrow functions do not have their own this context.
 









