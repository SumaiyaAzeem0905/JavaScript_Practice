 //<, >, <=, >=, ==, ===, !=, !==
 const temp=31
 if(temp<40){
    console.log("Temperature is less than 40");
    
 }else{
    console.log("Temperature is greater than 40");
 }



 //implicit scope
const balance=1000
//if(balance>500) console.log("test"), console.log("test2");

if(balance<500){
console.log("less than 50");
} else if(balance<750){
    console.log("less then 750");
    
}
else{
    console.log("less than 1200");
    
}


const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard){
    console.log("You can proceed with the transaction");
}
else if(userLoggedIn && !debitCard){
    console.log("Please add a debit card to proceed with the transaction");
    
}
else{
    console.log("Please login to proceed with the transaction");
    
} 




//switch case

// switch(key){
//     case "value1":
//         console.log("Value is 1");
//         break;
//     case "value2":
//         console.log("Value is 2");
//         break;
//     case "value3":
//         console.log("Value is 3");
//         break;
//     default:
//         console.log("Value is not found");
// }


const month=4
switch(month){
    case 1:
        console.log("January");
        break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
         default:
            console.log("Invalid month");
            break;
}
            
            
// truthy and falsy values

// falsy values=>0, -0,false,BigInt 0n, "", undefined, null, NaN
// truthy values=>true, 1, -1, "0", "false", [], {}, function(){}, Symbol(), BigInt(0), new Date(), Infinity, -Infinity

const empObj={}
if(Object.keys(empObj).length===0){
    console.log("Object is empty");
}

const userEmail=""
if(userEmail){
    console.log("Email is present");
    
}else{  
    console.log("Email is not present");
    
}


const userEmail1=[]
if(userEmail1){
    console.log("Email is present");}
else{
    console.log("Email is not present");
    
}



//Nullish coalescing operator(??)
// nullish coalescing operator is used to check for null or undefined values
let val1;
val1=5??10 // 5=>if val1 is null or undefined then it will take 10
val1=null??10
val1=undefined??10
console.log(val1); // 10=>if val1 is null or undefined then it will take 10



// Ternary operator

//condition?true:false
const price=100
price>=80?console.log(">80"):console.log("<80"); 








        

