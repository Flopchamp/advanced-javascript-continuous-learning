class Pizza{
    constructor(type,price){
        this.type=type;
        this.price=price;
    }
    static createMargherita(){
        return new Pizza("Margherita", 10);
    }
}

const margheritaPizza = Pizza.createMargherita();
console.log(margheritaPizza.type);
console.log(margheritaPizza.price);
