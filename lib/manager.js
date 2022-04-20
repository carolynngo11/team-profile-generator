// Build out Manager class (OfficeNumber, getRole() -- return "Manager")
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(Name, Id, Email, OfficeNumber) {
       super(Name, Id, Email,);
       this.officeNumber = OfficeNumber;
       this.role = "Manager";
    }
   
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole(){
        return this.role;
    }
   
}
module.exports = Manager;