let score="33"
console.log(typeof score); //string

let valueInNumber=Number(score)
console.log(typeof valueInNumber); //number

let score1="33abc"
let valueIn=Number(score1)
console.log(typeof valueIn);// number
console.log(valueIn) // NaN=>Not a number
console.log(valueIn+2); //NaN=>Not a number

let score2=null  // for undefined=>NaN,  for true=>1,  for false=>0, for any string=>NaN
console.log(typeof score2); // object
let valInNum=Number(score2)
console.log(typeof valInNum); // number
console.log(valInNum); //0
console.log(valInNum+2); //2

let isloggedIn=1 // for "" =>false, for any string "Sumaiya"=>true 
let booleanisloggedIn=Boolean(isloggedIn)
console.log(booleanisloggedIn); //true


//*************************************Operations******************************************** */

let num=3
let negNum=-num
console.log(negNum);

str1="Hi"
str2=" Sumaiya"
console.log(str1+str2); //concatenation=>Hi Sumaiya
console.log("1"+2); // concat => 12=> string
console.log(Number("1")+2) // 3=> number
console.log("1"+2+2); // 122=> string
console.log(1+2+"2");   // 32=> string
console.log(+true); // 1
console.log(+""); // 0=> for empty string it is anyways false and by adding + it converts to 0












