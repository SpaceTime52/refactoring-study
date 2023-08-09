abstract class Employee {
  // Define an abstract getter called `quota` without an implementation.
  abstract get quota(): any;
}

class Engineer extends Employee {
  // Implement the abstract `quota` getter in the derived class, if needed.
  get quota(): any {
    // Add the necessary logic here
    return undefined; // Placeholder, update with the actual logic.
  }
}

class Salesperson extends Employee {
  // Implement the abstract `quota` getter in the derived class, if needed.
  get quota(): any {
    // Add the necessary logic here
    return undefined; // Placeholder, update with the actual logic.
  }
}
