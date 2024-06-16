class Car {
  constructor(model, makeYear) {
    this.model = model;
    this.makeYear = makeYear;
  }

  displayCarinfo = () => {
    document.getElementById("model").innerText = this.model;
    document.getElementById("mk-yr").innerText = this.makeYear;
    console.log(`Model: ${this.model}, Make Year: ${this.makeYear}`);
  };

  calculateAge = () => {
    var currentYear = new Date().getFullYear();
    document.getElementById("age").innerText = currentYear - this.makeYear;
    return currentYear - this.makeYear;
  };
}

class ChildCar extends Car {
  constructor(model, makeYear) {
    super(model, makeYear);
  }
}

const pushpasCar = new ChildCar("Toyota Supra MK4", 2004);

pushpasCar.displayCarinfo();
console.log("Age: ", pushpasCar.calculateAge());
