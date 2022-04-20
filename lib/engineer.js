// Build out Engineer class (github, getGithub(), getRole() -- return "Intern")
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(Name, Id, Email, Github) {
       super(Name, Id, Email);
       this.github = Github;
       this.role = "Engineer";
    }
   
    getGithub() {
        return this.github;
    }
    getRole(){
        return this.role;
    }
   
}
module.exports = Engineer;