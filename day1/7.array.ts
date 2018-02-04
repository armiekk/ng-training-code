let arr = [1,2,3,4,5,6,7,8,9,10];

// map
const mappedArr = arr.map(num => num * 2);
console.log(mappedArr);

// filter
const filteredArr = arr.filter(num => num < 10);
console.log(filteredArr);

// forEach
arr.forEach(num => console.log(num));

// find
const equal = arr.find(num => num == 5);
console.log(equal);
const leaster = arr.find(num => num < 5);
console.log(leaster);
const greater = arr.find(num => num > 5);
console.log(greater);

// findIndex
const idx = arr.findIndex(num => num === 8);
console.log(idx);