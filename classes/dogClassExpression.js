//  dog class expression
const Dog = class{
    constructor(name){
        this.name = name;
    }
    bark(){
        console.log(`${this.name} says Woof!`);
    }
}

const dog = new Dog("Buddy");
dog.bark();