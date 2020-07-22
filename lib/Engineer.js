const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        inquirer.prompt([
            {
                type: "input",
                question: "What is your GitHub username?",
                name: "github"
            }
        ]);
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;