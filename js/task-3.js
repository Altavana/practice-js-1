// todo Створіть об'єкт calculator із трьома методами
// read(a, b) - приймає два аргументи і зберігає їх як властивості об'єкта
// sum() повертає суму збережених значень
// mult() помножує збережені значення і повертає резульco
const calculator = {
  read(a, b) {
    this.first = a;
    this.second = b;
  },
  sum() {
    return this.first + this.second;
  },
  mult() {
    return this.first * this.second;
  },
};
calculator.read(1, 7);
console.log(calculator.sum());
console.log(calculator.mult());
