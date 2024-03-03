class Car {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    if (value === "") {
      console.log("the brand cannot be an empty");
      return;
    }
    this._brand = value;
  }

  drive() {
    console.log(`Driving a ${this._brand} ${this._model}`);
  }
}

let myCar = new Car("Toyota", "Camry");
console.log(myCar.brand);
myCar.brand = "Honda";
console.log(myCar.brand);
myCar.drive();
