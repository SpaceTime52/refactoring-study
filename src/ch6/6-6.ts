class User {
  #lastName: string;
  #firstName: string;

  constructor(data: { firstName: string; lastName: string }) {
    this.#lastName = data.lastName;
    this.#firstName = data.firstName;
  }

  get lastName() {
    return this.#lastName;
  }

  get firstName() {
    return this.#firstName;
  }
}

let defaultOwner: User = new User({ firstName: '마틴', lastName: '파울러' });

export function getDefaultOwner(): User {
  return defaultOwner;
}
