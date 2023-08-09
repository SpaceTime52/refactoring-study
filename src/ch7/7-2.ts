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
    return [...this.#courses];
  }

  // 코스를 추가하고 싶을 때 활용
  addCourse(course: Course): void {
    this.#courses.push(course);
  }
}

export { Person, Course };

const bohyeon = new Person('BK');

// person.courses 에 새로운 코스를 만들면서 추가할 수 있다?
bohyeon.courses.push(new Course('알고리즘', false)); // 직접 주입에 실패해야 함
bohyeon.addCourse(new Course('리팩토링', true));

export function printSevenDashTwo(): void {
  console.log('1:', bohyeon.courses.length);
}

// 코스 업데이트 불가
