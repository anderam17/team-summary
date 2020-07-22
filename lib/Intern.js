const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
    constructor (school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your intern's school?",
                name: "school"
            }
        ]);
        return this.school;
    }

    getRole(){
        // ??
    }
}
