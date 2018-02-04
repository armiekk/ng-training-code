interface EmployeeInterface {
    firstName: string;
    lastName: string;
    tel?: string;
    email?: string;
    getFullName(): string;
    getContact?(): string;
}

interface EmpWithRole extends EmployeeInterface {
    roleId: number;
    roleName: string;
}

const emp: EmployeeInterface = { 
    firstName: 'foo', 
    lastName: 'bar', 
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

const empWithRole: EmpWithRole = {
    roleId: 1,
    roleName: 'Operation',
    firstName: 'foo', 
    lastName: 'bar', 
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

class empExtendItf implements EmpWithRole {
    roleId: number;
    roleName: string;
    firstName: string;
    lastName: string;
    
    getFullName() {
        return this.firstName + ' ' + this.lastName;
    }
}