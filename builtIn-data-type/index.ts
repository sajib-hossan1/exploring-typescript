const a : string = "hello world"

function getLowerCase(str :string){
    return str.toLowerCase();
}

console.log(getLowerCase('HeLLO'));

const b :number = 23;

function sum(num1 : number, num2: number){
    return num1 + num2;
}

console.log(sum(12,b));

const sub = (num1: number = 0, num2: number = 0) => {
    return num1 - num2;
}

console.log(sub(12,b));

const arr : number[] = [1,2,3,4,5,6];
const arr2 : string[] = ["hello", "mello", "gello"];

interface person {
    name : string;
    age : number;
    hobby : string;
}

const person : person = {
    name : "Sajib",
    age : 23,
    hobby : "programming",
}


type numberAndString = number | string;

const value : numberAndString = 1;


const arr1 : Array<number | string> = [1431,124,"sajib"];

// built in data type
// 1. string, 2. number, 3. Boolean, 4. undefined, 5. null, 6. void

