import { getDefaultOwner } from './6-6';

interface Owner {
  firstName: string;
  [key: string]: any; // 이는 owner 객체가 다른 속성들도 가질 수 있음을 표현합니다.
}

const owner: Owner = getDefaultOwner();
owner.firstName = '엘리';
console.log(owner);
console.log(getDefaultOwner());
