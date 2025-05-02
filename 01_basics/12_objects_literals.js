//object literals->Not singleton

const mySymbol=Symbol("key")

const user={
    name:"Sumaiya",
    email:"abcd@ig.com",
    age:20,
    city:"Hyderabad",
    isLOggedIn:true,
    lastLogin:["Mon","Tue"],
    [mySymbol]:"key"       // syntax to declare symbol inside object

}
console.log(user.city); //Hyderabad
console.log(user["city"]); //Hyderabad
console.log(user[mySymbol]); //key
console.log(typeof user[mySymbol]); //symbol

user.email="sample@gl.com"
Object.freeze(user)     // freeze the object so that it cannot be changed
console.log(user); 
user.email="example@ab.com"
console.log(user); // email is not changed as object is frozen


user.greeting=function(){
    console.log("Heyyy user"); 
    }

user.greetingTwo=function(){
    console.log(`Heyy user,${this.name}`); // this is used to access the object inside the function
    
}
console.log(user.greeting()); // Heyyy user
console.log(user.greetingTwo()); // Heyy user,Sumaiya









