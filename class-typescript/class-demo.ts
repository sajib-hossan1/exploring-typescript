class User {
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

let user1 = new User("Sajib", 23);
let user2 = new User("Rajib", 27);

user1.display();
user2.display();
