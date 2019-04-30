class Arithmetic {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  // Addition
  add() { return this.x + this.y; }

  // Subtraction
  sub() { return this.x - this.y; }

  // Multiplication
  mult() { return this.x * this.y; }

  // Division
  div() { return this.x / this.y; }
}

export default Arithmetic;
