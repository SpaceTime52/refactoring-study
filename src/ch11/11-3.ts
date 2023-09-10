// Chapter 11-3. 플래그인수 제거하기 (가능하면 플래그를 통해서 함수를 제어하지 않는게 좋다.)

// 예제 1 (좀더 명료하게)
class DimensionSetter {
  #height?: number;
  #width?: number;

  setWidth(value: number): void {
    this.#width = value;
  }

  setHeight(value: number): void {
    this.#height = value;
  }
}

// 예제 2 ()
class Concert {
  regularBook(customer: any): void {
    this.book(customer, false);
  }

  premiumBook(customer: any): void {
    this.book(customer, true);
  }

  // 중복이 있다면 함수 내부에서 사용하는 게 좋다. 외부에는 명령형으로 노출한다.
  private book(customer: any, isPremium: boolean): void {}
}

// 예제 3 (플래그 인자 없이 명령형으로 쓰는 게 더 좋다.)
function switchOn(): void {}
function switchOff(): void {}
