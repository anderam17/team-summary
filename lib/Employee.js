const inquirer = require("inquirer");
//!might need to get all of these through the other js things??
class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your employee's name?",
                name: "name"

            }
        ]);
        return this.name;
    }

    getId(){
        inquirer.prompt([
            {
                type: "number",
                question: "What is your employee's ID?",
                name: "id"
            }
        ]);
        return this.id;
    }
    getEmail(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your employee's email?",
                name: "email"
            }
        ]);
        return this.email;
    }

    //!It wants it to return employee?? But shouldn't it be an list and not an input
    getRole(){
        inquirer.prompt([
            {
                type: "list",
                question: "Which type of team member would you like to add?",
                name: "role",
                choices: ["Engineer", "Intern", "I don't want to add any more team members"]
            }
        ]);
        return this.role;
    }
}

module.exports = Employee;