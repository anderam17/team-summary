const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
    constructor (office){
        super(name, id, email);
        this.office = office;
    }
    getOffice(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your manager's office number?",
                name: "office"
            }
        ]);
        return this.office;
    }

    getRole(){
        // ??
    }
}
