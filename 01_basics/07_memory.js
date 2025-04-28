// Stack(primitive)    Heap(Referance)

let name1="Sumaiya"
let name2=name1
console.log(name2); // copy by value
name2="Azeem"
console.log(name1); // Sumaiya
console.log(name2); // Azeem
// name1 is not changed as it is a primitive value and not a reference value



let userOne={
    name:"user1",
    email:"email1"
}

let userTwo=userOne

console.log(userTwo); // copy by reference

userTwo.name="user2"
userTwo.email="email2"

console.log(userOne); // user1 is changed as it is a reference value and not a primitive value 
console.log(userTwo); // user2 is changed as it is a reference value and not a primitive value
// userOne and userTwo are pointing to the same object in memory

