// packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user input

const questions = [
    {
        type: "input",
        name: "UserName",
        message: "Enter your Github username:"
    },
    {
        type: "input",
        name: "Email",
        message: "Enter your email:"
    },
    {
        type: "input",
        name: "Title",
        message: "Enter your title:"
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description:"
    },
    {   
        type: "input",
        name: "Installation",
        message: "Enter instructions for installation:"
    },
    {   
        type: "input",
        name: "Usage",
        message: "Enter instructions for usage:"
    },
    {   
        type: "input",
        name: "License",
        message: "Enter license"
    },
    {   
        type: "input",
        name: "Contributing",
        message: "Enter names of any contributing partners"
    },
    {   
        type: "input",
        name: "Tests",
        message: "Enter a description of any tests run on the program"
    }
];

// function to write data to file

function writeToFile(filePath, answers) {
    console.log("Output Data:", answers)
    const template = generateMarkdown(answers)
    fs.writeFile(filePath, template, function (err) {
    if (err) {
        return console.error(err);
        }   
    });
    console.log("Data has been written to the file successfully!");
};

// function to initialize app

function init() {
    inquirer.prompt(questions).then(answers => {
        // console.log(answers);
        writeToFile("answers.md", answers);
    });
}

// Function call to initialize app

init();

//1. program must accept user data from the command line
//    a. call program (node {nameofprogram.js})
//    b. user is asked a question through inquirer package, response saved
//        -how to use inquirer to ask question (read documentation)
//2. transform data into predetermined format
//3. create file containing dataanswers.md