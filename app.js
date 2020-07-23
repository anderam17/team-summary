const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//This array will hold each new team member object that is created and will be passed to the render function.
const teamMembers = [];
const noMoreMembers = false;

const manager = new Manager(getName(), getId(), getEmail(), getOfficeNumber());
teamMembers.push(manager);

while (!noMoreMembers){
    inquirer.prompt([
        {
            type: "list",
            question: "Which type of team member would you like to add?",
            name: "role",
            choices: ["Engineer", "Intern", "I don't want to add any more team members"]
        }
    ]);
    if(this.role === "Engineer"){
        const engineer = new Engineer(getName(), getId(), getEmail(), getGitHub());
    }else if(this.role === "Intern"){
        const intern = new Intern(getName(), getId(), getEmail(), getSchool());
    }else{
        noMoreMembers = true;
    }
}

//*empty array
//* fill empty array with objects for each team member - HOW DO I GET THIS INFO
//* Boolean operator - while no more team members is false, keep asking 
//* when user hits "I don't want..." call the render function; pass array of objects
//* ^ This will produce your HTML, Use it to create an HTML file named team.html in the output folder. Use output path to target this location.
//* ^^ HINT check if output folder exists. If not, create it.

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
