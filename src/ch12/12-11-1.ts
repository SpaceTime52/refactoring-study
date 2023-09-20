class List {}

class Stack {
  #storage: List;

  constructor() {
    this.#storage = new List();
  }
}
