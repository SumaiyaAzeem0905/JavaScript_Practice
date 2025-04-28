const studentId=101
let studentEmail="sample@gmail.com"
var studentPassword="1234"
studentCity="Bangalore"
let studentState; //undefined


//changing const val not allowed
//studentId=102;

studentEmail="abcde@fg.com"
studentPassword="abcde"
studentCity="Hyd"

//to print all variables at a time 
console.table([studentId,studentEmail,studentPassword,studentCity,studentState]);

// Not to use var=> causes issue in blockScope and functional scope

