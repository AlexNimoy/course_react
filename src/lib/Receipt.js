class Receipt {
  constructor(positions = []) {
    this.nextId = 1;
    this.positions = positions;
  }

  add({ name = '', cost = 0.0 } = {}) {
    this.positions.push(
      { id: this.nextId++ , name, cost: parseFloat(cost) }
    );
  }

  show(){
    return this.positions;
  }

  delete(id) {
    let pos = this.positions;
    const index = pos.findIndex(item => item.id === id);

    if(index >= 0) {
      this.positions = [
        ...pos.slice(0, index),
        ...pos.slice(index + 1)
      ];
    }
  }

  amount(){
    return this.positions.length;
  }

  total(){
    return this.positions
      .map(i => parseFloat(i.cost))
      .reduce((sum, a) => sum + a, 0);
  }
}

export default Receipt;
