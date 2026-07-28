class Dessert{
    constructor(name, price,calories){
        this.name=name;
        this.price=price;
        this.calories=calories;
    }
    showDessertDetails(){
        console.log(`Dessert Name: ${this.name}, Price: ${this.price}, Calories: ${this.calories}`);
    }
}
const dessert1= new Dessert("Chocolate Cake", 5.99, 350);
dessert1.showDessertDetails();
console.log(dessert1.name);