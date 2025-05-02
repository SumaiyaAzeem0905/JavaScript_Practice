var a=500 
const b=2000 
let c=900
console.log(a); // 500
console.log(b); // 2000 
console.log(c); // 900

if(true){
    let c=1000 // let is block scoped and not hoisted
    const b=2000  // const is block scoped and not hoisted
    var a=3000 // var is function scoped and hoisted
    console.log("Inside if block:",a); // prints 3000
    
}
console.log(a); // var is hoisted and will print 3000
console.log(b);   // const is block scoped and will print 2000
console.log(c);  // let is block scoped and will print 1000


function one(){
    const username="Sumaiya"
    function two(){
        const password="Azeem"
        console.log(username); // Sumaiya
    }
    console.log(password); // ReferenceError: password is not defined
    two()
    
}
one()


//nested if block scope

if(true){
    const username="Sumaiya"
    if(username==="Sumaiya"){
        const password=" Azeem"
        console.log(username+password); // Sumaiya Azeem
    }
    console.log(password); // ReferenceError: password is not defined
}
console.log(username); // ReferenceError: username is not defined






/*****************************************Interesting***************************************************** */
console.log(addOne(5)); // 6

function addOne(num){
    return num+1
}

console.log(addTwo(5)); // ReferenceError: addTwo is not defined
// addTwo is not hoisted as it is a function expression and not a function declaration
const addTwo=function(num){ 
    return num+2
}




 