const coding=["js","python","java","c++","c#","php"];
const values=coding.forEach(  (item)=>{
    console.log(item); // js python java c++ c# php
    return item; // undefined
    
}) 
// console.log(values); // undefined=>forEach does not return anything



//filter method=>it returns a new array with the elements that pass the test implemented by the provided function.
// it does not change the original array. It returns a new array with the elements that pass the test implemented by the provided function.

const numbers=[1,2,3,4,5,6,7,8,9,10];
const evenNumbers=numbers.filter((item)=>{
    return item>3; 
})
console.log(evenNumbers); // [ 2, 4, 6, 8, 10 ]




const books=[
    {title:'book1', genre:'fiction', rating:4.5},
    {title:'book2', genre:'non-fiction', rating:3.5},
    {title:'book3', genre:'fiction', rating:4.0},
    {title:'book4', genre:'non-fiction', rating:5.0},   
    {title:'book5', genre:'fiction', rating:2.5},
    {title:'book6', genre:'non-fiction', rating:4.0},
    {title:'book7', genre:'fiction', rating:3.0},
]


//map   =>it creates a new array populated with the results of calling a provided function on every element in the calling array. It does not change the original array.
const userBooks=books.filter( (book)=> book.genre==='fiction')
console.log(userBooks); // [ { title: 'book1', genre: 'fiction', rating: 4.5 }, { title: 'book3', genre: 'fiction', rating: 4 }, { title: 'book5', genre: 'fiction', rating: 2.5 }, { title: 'book7', genre: 'fiction', rating: 3 } ]


const Nums=[1,2,3,4,5,6,7,8,9,10]
const newNums=Nums.map(  (num)=> num+10)
console.log(newNums); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]


//chaining filter and map
const Nums2=[1,2,3,4,5,6,7,8,9,10]
const newNums2=Nums2.map((num)=>num*10) // [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]
                    .map((num)=>num+10) // [ 20, 30, 40, 50, 60, 70, 80, 90, 100, 110 ]
                    .filter((num)=>num>50) // [ 60, 70, 80, 90, 100, 110 ]
console.log(newNums2); 



//reduce method=>it executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const numbers2=[1,2,3,4,5,6,7,8,9,10]
const sum=numbers2.reduce(function(acc,crrval){
    console.log(`acc=${acc}, crrval=${crrval}`); // acc=0, crrval=1 acc=1, crrval=2 acc=3, crrval=3 acc=6, crrval=4 acc=10, crrval=5 acc=15, crrval=6 acc=21, crrval=7 acc=28, crrval=8 acc=36, crrval=9 acc=45, crrval=10
    
    return acc+crrval; // 55
},0)
console.log(sum); // 55


