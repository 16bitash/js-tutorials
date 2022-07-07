function Car(company, color, modal) {
  this.company = company;
  this.color = color;
  this.modal = modal;
}

Car.prototype.start = function () {
  console.log(this.company);
};

const myCar = new Car("mahindra", "blue", "scorpio");
const yourCar = new Car("honda", "red", "civic");

// console.log(myCar);
// console.log(yourCar);

myCar.start();
yourCar.start();
