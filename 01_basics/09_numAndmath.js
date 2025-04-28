const num1=10
const num2=new Number(20)
console.log([num1,num2]); // [ 10, [Number: 20] ]
console.log(num1+num2); // 30=>number + object=>object is converted to number
console.log(num2.toString()); // [Number: 20]=>object is converted to string
console.log(typeof num2); // object=>object is converted to number
console.log(num1.toString().length); // 2=>string length
console.log(num2.toFixed(2)); // 20.00=>number is converted to string with 2 decimal points

const num3=15.8664
console.log(num3.toPrecision(3)); // 15.9=>number is converted to string with 3 significant digits

const num4=155.8668
console.log(num4.toPrecision(3)); // 156=>number is converted to string with 3 significant digits

const hundreds=1000000000
console.log(hundreds.toLocaleString('en-US')); // 1,000,000,000=>number is converted to string with comma separated values
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,00,000=>number is converted to string with comma separated values



/**************************************************Maths****************************************/

console.log(Math)
console.log(Math.abs(-9)); // 9=>absolute value
console.log(Math.round(8.9)); // 9=>rounds to nearest integer
console.log(Math.round(8.4)); // 8=>rounds to nearest integer
console.log(Math.ceil(3.1));// chooses top value =>4
console.log(Math.floor(3.9));// chooses 3
console.log(Math.random());// Always gives values between 0 and 1
console.log(Math.random()*10);// if i want values betwwen 1 and 10
console.log((Math.random()*10)+1);// if the value is 0.023445
console.log(Math.floor(Math.random()*10)+1);// for smallest value


const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min); // for random values between 10 and 20
console.log(Math.floor(Math.random()*(max-min))+min); // for random values between 10 and 19















