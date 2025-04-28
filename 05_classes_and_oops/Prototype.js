// let myName = "Sumaiya     "
// let myFavColor = "Purple     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sumaiya = function(){
    console.log(`sumaiya is present in all objects`);
}

Array.prototype.heySumaiya = function(){
    console.log(`Sumaiya says hello`);
}

// heroPower.sumaiya()
// myHeros.sumaiya()
// myHeros.heySumaiya()
// heroPower.heySumaiya()

// inheritance

const User = {
    name: "nida",
    email: "nida@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "SumaiyaAzeem     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sumiaya".trueLength() 
"iceTea".trueLength()