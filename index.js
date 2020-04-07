// Constant Values (Cannot be Altered)
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");

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
        name: "credits",
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
    {
        type: "input",
        name: "site",
        message: "Deployed App Site:"
    }
    
];

// Function to create file
function writeToFile(response, user) {
    let markdown = generateMarkdown(response, user);
    fs.writeFile("README.md", markdown, function(err) {
        if (err) {
            return console.log(err);
        }
         console.log("Success!!")
    });
};

// Function for Initialization 
function init() {
    inquirer.prompt(questions).then(function (data) {
        let response = data;
        const usernameURL = `https://api.github.com/users/${data.username}`
        axios.get(usernameURL).then(function (res) {
            writeToFile(response, res.data)
        }).catch(function (err) {
            console.log(err);
        }).then(function () {
            console.log("Thank you for using README.md Generator!");
        });
    });

};

// Initialize
init();
