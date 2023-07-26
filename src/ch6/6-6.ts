interface Owner {
  firstName: string;
  lastName: string;
}

let defaultOwner: Owner = { firstName: '마틴', lastName: '파울러' };

export function getDefaultOwner(): Owner {
  return defaultOwner;
}
