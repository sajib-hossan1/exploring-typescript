class User2 {
    userName : string;
    age : number;

    constructor(userName:string, age:number){
        this.userName = userName;
        this.age = age;
    }
    
    display() : void{
        console.log(`user name : ${this.userName}, age : ${this.age}`); 
    }
}

class Student extends User2 {
    studentId : number;

    constructor(userName:string, age:number, studentId:number){
        super(userName,age);
        this.studentId = studentId;
    }

    display() : void{
        console.log(`user name : ${this.userName}, age : ${this.age}, id : ${this.studentId}`); 
    }
}

let student1 = new Student("sajib",23, 2120027);
student1.display()

