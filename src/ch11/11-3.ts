// 예제 1
class DimensionSetter {
  private _height?: number;
  private _width?: number;

  setDimension(name: 'height' | 'width', value: number): void {
    if (name === 'height') {
      this._height = value;
      return;
    }
    if (name === 'width') {
      this._width = value;
      return;
    }
  }
}

// 예제 2
class Concert {
  book(customer: any, isPremium: boolean): void {}
}

// 예제 3
function setSwitch(on: boolean): void;
