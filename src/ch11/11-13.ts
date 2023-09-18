// Chapter 11-13. 예외를 사전확인으로 바꾸기 (예상하는 실패케이스이면 예외를 던지는 대신에 미리 디폴트 지정하는 등의 사전확인)
const values: (number | string)[] = [];
function getValueForPeriod(index: number): number | string {
  return index < 0 || index > values.length ? 0 : values[index];
}
