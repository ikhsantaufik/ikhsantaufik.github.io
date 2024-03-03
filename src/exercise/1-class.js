class Car {
  // properties
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  // methods
  getInfo() {
    return `The car is ${this.make} & ${this.model}`;
  }
}
