const promiseOne=new Promise(function(resolve, reject){  
    // promise-> Evntual completion of an async task
    //Do an async task
    //DB calls, cryptography,network
    //This is a function which takes two parameters resolve and reject
    // resolve is called when the async task is completed successfully
    // reject is called when the async task fails
    setTimeout(function(){  
      console.log('Async task is complete');
      resolve()  
    },1000)  
})
promiseOne.then(function(){
    console.log("promise consumed");      
    })     



new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography,network
    setTimeout(function(){
      console.log('Async1 task is complete');
      resolve()
    },2000)
}).then(function(){
    console.log("promise1 consumed");
    
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve({username: "Chai", email: "chai@example.com"})
  }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "hitesh", password: "123"})
      } else {
          reject('ERROR: Something went wrong')
      }
  }, 1000)
})

promiseFour
.then((user) => {
  console.log(user);
  return user.username
}).then((username) => {
  console.log(username);
}).catch(function(error){
  console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if (!error) {
          resolve({username: "javascript", password: "123"})
      } else {
          reject('ERROR: JS went wrong')
      }
  }, 1000)
});

async function consumePromiseFive(){
  try {
      const response = await promiseFive
      console.log(response);
  } catch (error) {
      console.log(error);
  }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
  return response.json()
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.