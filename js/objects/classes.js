class Person {
    name;
    constructor(name){
        this.name = name;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

const giles = new Person("Giles");
console.log(giles.name);

class Professor extends Person {
    #teaches;
    constructor(name, teaches){
        super(name);
        this.#teaches = teaches;
    }
    introduceSelf(){
        console.log(
            `My name is ${this.name}, and I will be your ${this.#teaches} professor.`
        );
    }
    grade(paper){
       const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
    }
}

const walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf();
walsh.grade("my paper");
console.log(walsh.teaches)

class Student extends Person{
    #year; // private data properties must be declared in the class declaration and
    // their names start with #

    constructor(name, year){
        super(name);
        this.#year = year;
    }
    introduceSelf(){
        console.log(
            `Hi! I'm ${this.name}, and I'm in the year ${this.#year}`
        );
    }
    canStudyArchery(){
        return this.#year > 1;
    }
}

// Private methods
class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log("You called me?");
    }
}
const myExample = new Example();
myExample.somePublicMethod();
myExample.#somePrivateMethod();
