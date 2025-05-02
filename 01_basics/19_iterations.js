for(index=0;index<=15;index++){
    const element=index
    if(element%2==0){
        console.log(`${element} is even`);
        
    }
    console.log(element);
    
}


for(i=0;i<=10;i++){
    console.log(`i=${i}`);
    
    for(j=0;j<10;j++){
        console.log(i+'*'+j+'='+i*j);
  }
}


let myArray=["Sumaiya", "Azeem", "Lalkot"]
console.log(myArray.length); // 3
for (let index = 0; index < myArray.length; index++){
    const element = myArray[index];
    console.log(element); // Sumaiya Azeem Lalkot
    }


//break and continue
// break statement is used to exit the loop
// continue statement is used to skip the current iteration and move to the next iteration

for (let index = 0; index < 20; index++) {
    if(index === 5) {
        break; // exit the loop when index is 10
    }
    console.log(index); // prints numbers from 0 to 9
   }


   for (let index = 0; index < 20; index++) {
    if(index === 5) {
        continue; // skip the current iteration when index is 10
    }
    console.log(index); // prints numbers from 0 to 19 except 5
   }



// while loop
// while loop is used when we don't know the number of iterations in advance
// while loop is executed when the condition is true

let cnt=0
while(cnt<=10){
    console.log(`count is ${cnt}`);
    cnt++ // increment the index by 1
    
}
 

// do while loop
// do while loop is executed at least once even if the condition is false

let score=1
do{
console.log(`score is ${score}`);
score++ // increment the index by 1

}while(score<=10);

