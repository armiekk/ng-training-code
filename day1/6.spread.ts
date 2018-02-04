const obj1 = { firstName: 'John', lastName: 'Snow' };

const obj2 = { ...obj1, tel: '123456789', email: 'e@mail.com' };

console.log(obj2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1, 6, 7, 8, 9];