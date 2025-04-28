const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const book = {
    name: 'JavaScript',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("book is ordered");
    }
}

console.log(Object.getOwnPropertyDescriptor(book, "name"));

Object.defineProperty(book, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(book, "name"));

for (let [key, value] of Object.entries(book)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}