const myArr=[1,2,3,4,5,6]
console.log(myArr);
const myArr1=new Array(1,2,3,4)

//Array methods

myArr.push(7)
console.log(myArr); // Adds value at the end

myArr.pop()// removes last element

myArr.unshift(10)
console.log(myArr); // Adds value at the beginning

myArr.shift()
console.log(myArr); // removes first element


const newArr=myArr.join()
console.log(newArr); // Converts array to string
console.log(typeof newArr); // string

console.log(myArr.slice(1,3)); 
console.log("A", myArr);   // doesn't manipulate original array

console.log(myArr.splice(1,3));  
console.log("B", myArr);  // MAnipulates the original array



const Arr1=["num1","num2","num3"]
const Arr2=["num4","num5","num6"]
Arr1.push(Arr2)
console.log(Arr1); // adds the array as a single element at the end
console.log(Arr1[3][1]); // num5

const Arr3=Arr1.concat(Arr2)
console.log(Arr3); // adds the array as a single element at the end

const Arr4=[...Arr1,...Arr2]  //Gives spreadout values
console.log(Arr4); 


const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const one_more_array=anotherArray.flat(Infinity); //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(one_more_array);

console.log(Array.isArray("Sumaiya")) // false
console.log(Array.from("Sumaiya")) // gives array of characters

console.log(Array.from({name: "Sumaiya"})) // gives empty array // Should specify keys or values


let rank1=1
let rank2=2
let rank3=3
console.log(Array.of(rank1,rank2,rank3)); // [ 1, 2, 3 ] // Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.












