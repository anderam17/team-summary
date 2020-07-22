const inquirer = require("inquirer");

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
                type: "input",
                question: "What is your employee's ID?",
                name: "ID"
            }
        ]);
        return this.ID;
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

    getRole(){
        inquirer.prompt([
            {
                type: "list",
                question: "Which type of team member would you like to add?",
                name: "role",
                options: ["Engineer", "Intern", "I don't want to add any more team members"]
            }
        ]);
        return this.role;
    }
}

module.exports = Employee;