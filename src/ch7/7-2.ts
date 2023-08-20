class Course {
  #name: string;
  #isAdvanced: boolean;

  constructor(name: string, isAdvanced: boolean) {
    this.#name = name;
    this.#isAdvanced = isAdvanced;
  }

  get name(): string {
    return this.#name;
  }

  get isAdvanced(): boolean {
    return this.#isAdvanced;
  }
}

class Person {
  #name: string;
  #courses: Course[];

  constructor(name: string) {
    this.#name = name;
    this.#courses = [];
  }

  get name(): string {
    return this.#name;
  }

  get courses(): Course[] {
    return this.#courses;
  }

  set courses(courses: Course[]) {
    this.#courses = courses;
  }
}

export { Person, Course };

const bohyeon = new Person('BK');
bohyeon.courses.push(new Course('리팩토링', true));

export function printSevenDashTwo(): void {
  console.log('1:', bohyeon.courses.length);
}
