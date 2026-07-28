class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    
}
class Car extends Vehicle{
    constructor(make,model,year,numDoors){
        super(make,model,year);
        this.numDoors=numDoors;
    }
    honk(){
        console.log("Honk! Honk!");
    }
}
const myCar = new Car("Toyota","Camry",2020,4);
console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
console.log(myCar.numDoors);
myCar.honk();

