// normal type
const foo: string = 'this is string type';

const bar: number = 9999;
const boo: number = 3.145673453;

// class type
const date: Date = new Date();

class Employee1 {
    firstName: string;
    lastName: string;
}

const emp1: Employee1 = { firstName: 'John', lastName: 'Snow' };

// interface type
interface Employee2 {
    firstName: string;
    lastName: string;
    tel?: string;
}

const emp2: Employee2 = { tel: '1234567890' };
const emp3: Employee2 = { firstName: 'Ed', lastName: 'Stark', tel: '1234567890' };