const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    getOfficeNumber(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your manager's office number?",
                name: "officeNumber"
            }
        ]);
        return this.officeNumber;
    }

    getRole(){
        // ??
    }
}
module.exports = Manager;
