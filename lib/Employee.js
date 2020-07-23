const inquirer = require("inquirer");
//!might need to get all of these through the other js things??
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
        return "Employee";
    }
}

module.exports = Employee;