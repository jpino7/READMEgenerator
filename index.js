const inquirer = require("inquirer");

// Questions for User to answer
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your primary email?"
    },
    {
        type: "input",
        name: "project",
        message: "Name for the project:"
    },
    {
        type: "input",
        name: "description",
        message: "Description of the project:"
    },
    {
        type: "input",
        name: "installation",
        message: "How to install app:"
    },
    {
        type: "input",
        name: "usage",
        message: "Describe how to use the app:"
    },
    {
        type: "input",
        name: "license",
        message: "Licenses used:"
    },
    {
        type: "input",
        name: "credit",
        message: "Name those who contributed to the project:"
    },
    {
        type: "input",
        name: "contributing",
        message: "Contributing Guidelines:"
    },
    {
        type: "input",
        name: "tests",
        message: "Explain how tests were implemented to this project:"
    },
];


function writeToFile(fileName, data) {
}

function init() {
    inquirer.prompt(questions);

}

init();