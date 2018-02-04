// normal class

class Employee {
    private id: number;
    firstName: string;
    lastName: string;
    tel?: string;
    
    constructor() {
        this.firstName = 'John';
        this.lastName = 'Snow';
    }

    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const emp4: Employee = new Employee();

console.log(emp4.getFullName()); // John Snow
console.log(emp4.firstName); // John
console.log(emp4.lastName); // Snow
console.log(emp4.id); // throw error

const emp5: Employee = { 
    firstName: 'Ed', 
    lastName: 'Stark',
    getFullName: () =>  this.firstName + ' ' + this.lastName,
};

// abstract class

abstract class AbsEmployee {
    // private id: number;
    // protected id: number;
    id: number;
    firstName: string;
    lastName: string;
    tel?: string;

    abstract getFullName(): string;

    getTel() {
        return this.tel;
    }
}

class RealEmployee extends AbsEmployee {

    getFullName(){
        return this.firstName + ' ' + this.lastName;
    }
}


const realEmp: RealEmployee = new RealEmployee();
console.log(realEmp.getFullName());
console.log(realEmp.getTel());

class RealEmployee2 implements AbsEmployee {
    id: number;
    firstName: string;
    lastName: string;
    tel: string;
    getFullName() {
        return this.lastName + ' ' + this.firstName;
    }
    getTel() {
        return this.tel;
    }
}