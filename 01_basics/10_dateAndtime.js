let myDate=new Date()
// console.log(myDate); 
// console.log(typeof myDate); 

// console.log(myDate.toString()); 
// console.log(myDate.toDateString());  
// console.log(myDate.toISOString());
// console.log(myDate.toJSON()); 
// console.log(myDate.toLocaleDateString());



let anotherDate=new Date(2019,0,19)
console.log(anotherDate.toDateString()); // Sat Jan 19 2019
console.log(anotherDate.toLocaleDateString()); // 1/19/2019

let date1=new Date(2019,0,19,18,30)
console.log(date1.toLocaleString()); // 1/19/2019, 6:30:00 PM



let timeStemp=Date.now()
console.log(timeStemp); // 1674123000000=>milliseconds since 1970-01-01T00:00:00Z

console.log(Math.floor(Date.now()/1000)); // 1674123000=>seconds since 1970-01-01T00:00:00Z
console.log(Math.floor(Date.now()/1000/60)); // 27902050=>minutes since 1970-01-01T00:00:00Z








