class Car {
  constructor(brand, model) {
    this._brand = brand;
    this._model = model;
  }

  get brand() {
    return this._brand;
  }

  get model() {
    return this._model;
  }
}

let myCar = new Car("toyota", "camry");
console.log(myCar.model);
