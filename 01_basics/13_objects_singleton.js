const employee={
    email:"some@ig.com",
    name:{
        employeefullname:{
            firstname:"Sumaiya",
            lastname:"Azeem"
        }
    },
    age:30,
    department:"Engineering"
}

 console.log(employee.name.employeefullname.firstname); //Sumaiya



const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3=Object.assign(obj1,obj2) //assigns the values of obj2 to obj1 and returns obj1
const obj4={...obj1,...obj2} //spread operator to merge objects and return a new object
console.log(obj4); //{1: "a", 2: "b", 3: "c", 4: "d"}

console.log(obj3); //{1: "a", 2: "b", 3: "c", 4: "d"}


//objects in array

// const users=[
//     {
//         id:1,
//         name:"name1"
//     },
//     {
//         id:2,
//         name:"name2"
//     },
//     {
//         id:3,
//        name:"name3"
//     }

// ]


console.log(Object.keys(employee)); //["email", "name", "age", "department"]
console.log(Object.values(employee)); 
console.log(Object.entries(employee)); 




/*************************************Destructuring *************************************************************/

const course={
    name:JSON,
    price:"1000",
    trainer:"Sumaiya"
}

const {trainer}=course //destructuring the object to get the value of trainer
console.log(trainer); //Sumaiya


