//requiring subclasses and node platforms
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//creating output path
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//This array will hold each new team member object that is created and will be passed to the render function.
const teamMembers = [];

//This function starts off with the user entering information about their manager then calls createTeam
function createManager(){
    console.log("Please enter your team's information.")
    inquirer.prompt([
        {
            type: "input",
            message: "What is your manager's name?",
            name: "name"

        },
        {
            type: "number",
            message: "What is your manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your manager's office number?",
            name: "officeNumber"
        }

    ]).then((response)=>{
        // information is stored in a new Manager object
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        //manager pushed to teamMembers array
        teamMembers.push(manager);
        createTeam();
    })
}

//This function starts off with the user entering information about the Engineer then calls createTeam
function createEngineer(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your engineer's name?",
            name: "name"

        },
        {
            type: "number",
            message: "What is your engineer's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your engineer's GitHub username?",
            name: "github"
        }

    ]).then((response)=>{
        // information is stored in a new Engineer object
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(engineer);
        createTeam();
    })
}

//This function starts off with the user entering information about the Engineer then calls createTeam
function createIntern(){
    inquirer.prompt([
        {
            type: "input",
            message: "What is your intern's name?",
            name: "name"

        },
        {
            type: "number",
            message: "What is your intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is your intern's school?",
            name: "school"
        }

    ]).then((response)=>{
        // information is stored in a new Intern object
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(intern);
        createTeam();
    })
}

//prompts the user for what type of employee they would like to add
function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]).then((response)=>{
        //switch case that creates each type of subclass and calls checkOutPut when the user is done
        switch(response.role){
            case "Engineer":
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
                checkOutPut();
        }
    })
}

//checks if folder for output exists and if it does not, it creates one. Writes HTML files into this folder.
function checkOutPut(){
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR);
    }

    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
} 


createManager();
