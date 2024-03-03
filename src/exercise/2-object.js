class Car {
  // properties
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  // methods
  getInfo() {
    return `The car is ${this.brand} & model of the car is ${this.model}`;
  }

  turnOnEngine() {
    return "Engine is turn on";
  }
}

// Object
let myCar = new Car("Toyota", "Camry");
console.log(myCar.getInfo());
console.log(myCar.turnOnEngine());
