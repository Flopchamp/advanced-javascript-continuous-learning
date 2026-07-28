class Pizza{
    static numberOfPizzasSold=0;
    constructor(type){
        this.type=type;
        Pizza.numberOfPizzasSold++;
    }
}
console.log(Pizza.numberOfPizzasSold);
const margheritaPizza=new Pizza("Margherita");
console.log(Pizza.numberOfPizzasSold);
const pepperoniPizza=new Pizza("Pepperoni");
console.log(Pizza.numberOfPizzasSold);