 const name="Sumaiya"
 const age=20
 console.log(name+age+" Heyyy"); // old method

 //String Interpolation=>placeholder to directly inject variables

 console.log(`Heyy My name is ${name} and my age is ${age}`);
 
 //Another method to declare string
 const anotherName=new String("LALKOT");

 console.log(anotherName[0]);
 console.log(anotherName.__proto__); //object 
 console.log(anotherName.length);  // 5
 console.log(anotherName.indexOf("K"));  
 console.log(anotherName.toLowerCase());  // lalkot
 console.log(anotherName.charAt(3)); // K
 
 const newString=anotherName.substring(0,3)
 console.log(newString); // Lal

 const newStr=anotherName.slice(-4, 3)// Can give negative values
 console.log(newStr); //L

 const trimString="      Sumaiya       "
 console.log(trimString); // "      Sumaiya       "
 console.log(trimString.trim()); // "Sumaiya"  // removes extra spaces from start and end of string
 console.log(trimString.trimStart()); // "Sumaiya       "  // removes extra spaces from start of string

 const userName="Sumaiya-0905-Azeem"
 console.log(userName.replace("0905","101")); //Sumaiya-101-Azeem

 console.log(userName.includes("0905")); //true 
 console.log(userName.split('-')); //["Sumaiya", "0905", "Azeem"]
 console.log(userName.split('-')[1]); //0905
   
 
 

 
 
 
 
 
 
 
 
 