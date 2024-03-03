class Vehicle {
  constructor(type) {
    this.type = type;
  }

  getInfo() {
    return `vehicle is driven`;
  }
}

class Car extends Vehicle {
  getInfo() {
    return `Car is driven`;
  }
}

class ElectricCar extends Car {
  getInfo() {
    return `${super.getInfo()}, ElectricCar is driven`;
  }
}

let myVehicle = new Vehicle();
let myCar = new Car();
let myElectricCar = new ElectricCar();

console.log(myVehicle.getInfo());
console.log(myCar.getInfo());
console.log(myElectricCar.getInfo());
