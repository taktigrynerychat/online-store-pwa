export function removeItemFromArr(arr: any[], value: any): any[] {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

export function getChildValue(obj: any, keyString: string): any {
  const keys = keyString.split('.');
  let tmp;
  keys.forEach(key => {
    tmp = obj[key];
  });
  return tmp;
}
