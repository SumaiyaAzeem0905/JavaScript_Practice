//for of loop
// for of loop is used to iterate over iterable objects like arrays, strings, etc.

const arr=[1,2,3,4,5]
for(const i of arr){
    console.log(i); // 1 2 3 4 5
}


//Maps
// Maps are used to store key-value pairs
// Maps are iterable objects

const map=new Map()
map.set("name", "Sumaiya")
map.set("age",20)
map.set("isRegistered", true)
console.log(map); // Map(3) { 'name' => 'Sumaiya', 'age' => 20, 'isRegistered' => true }
 for(const [key,value] of map){
    console.log(key,value)
 }


// for object->for of loop is not used, we use for in loop to iterate over objects.
// for in loop is used to iterate over the properties of an object

const obj={
   course:"JavaScript",
   trainer:"Sumaiya",
}

for (const i in obj) {
   console.log(i);
   console.log(obj[i]); // JavaScript Sumaiya
   // i is the key and obj[i] is the value

   console.log(`${i} : ${obj[i]}`); // course : JavaScript trainer : Sumaiya
     }


// for arrays ->for in loop is used to iterate over the indexes of an array


// for each loop

const codingLanguages=["JavaScript", "Python", "Java", "C++"]
// codingLanguages.forEach( function (element){
//      console.log(element); // JavaScript Python Java C++
//      })

codingLanguages.forEach((element) =>{ // we can declare index, value and array in the forEach loop as well.
    console.log(element); // JavaScript Python Java C++
})

function printMe(item){
    console.log(item);  // JavaScript Python Java C++
    
}
codingLanguages.forEach(printMe) // passing function as an argument to forEach loop
// codingLanguages.forEach(printMe(item)) // passing function as an argument to forEach loop


const myCoding=[
    {
        name:"JavaScript",
        duration:"3 months",
        trainer:"Sumaiya"
    },
    {
        name:"Python",
        duration:"2 months",
        trainer:"Azeem"
    },
    {
        name:"Java",
        duration:"4 months",
        trainer:"Lalkot"
    }
]

myCoding.forEach((element) => {
    console.log(element.name); // JavaScript Python Java
    console.log(element.duration); // 3 months 2 months 4 months
    console.log(element.trainer); // Sumaiya Azeem Lalkot
})