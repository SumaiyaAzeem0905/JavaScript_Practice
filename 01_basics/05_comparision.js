console.log(2>1);
console.log(2>=1);


console.log("2">1); // true=>string is converted to number
console.log("2">"1"); // true=>string is compared as string

console.log(null>2); // false=>null is converted to 0 and 0>2=>false
console.log(null==2); 

console.log(undefined>=2); // false=>undefined is converted to NaN and NaN>=2=>false
console.log(undefined==2);

//=== strict check=>which checks data types also

console.log("2"===2); // false=>string is not equal to number
console.log("2"==2); // true=>string is converted to number







