// Build out Intern class (school, getSchool(), getRole() -- return "Intern")
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(Name, Id, Email, School) {
       super(Name, Id, Email,);
       this.school = School;
       this.role = "Intern";
    }
   
    getSchool() {
        return this.school;
    }
    getRole(){
        return this.role;
    }
   
}
module.exports = Intern;