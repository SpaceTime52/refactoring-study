// Chapter 11-7.  세터 제거하기
class Persona {
  #name: string;

  constructor(name: string) {
    this.#name = name;
  }

  get name(): string {
    return this.#name;
  }
}
