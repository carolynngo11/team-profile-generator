// Build out Employee class (name, id, email, getName(), getId(), getEmail(), getRole() -- return "Employee").
class Employee{
    constructor(Name, Id, Email){
        this.name = Name;
        this.id = Id;
        this.email = Email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee"
    }
}
module.exports = Employee;