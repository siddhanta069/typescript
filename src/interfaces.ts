interface Person {
    name:string;
    age:number;
}

class Manager implements Person {
    name:string;
    age:number;
    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

let m = new Manager("John", 32);
console.log(m.name);