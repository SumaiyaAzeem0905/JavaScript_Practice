class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const course = new Teacher("teacher1", "t1@teacher.com", "123")

chai.logMe()
const otherUser= new User("otherUser")

masalaChai.logMe()

console.log(course instanceof User);