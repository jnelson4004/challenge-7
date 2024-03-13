// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        name: "Title",
        message: "Enter your title:"
    },
    {
        type: "input",
        name: "Table_of_Contents",
        message: "Enter a table of contents:"
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
    },
    {   
        type: "input",
        name: "Questions",
        message: "Enter any questions"
    }

]).then(answers => {
    console.log('User input:');
    console.log(answers);
});

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {};
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

//1. program must accept user data from the command line
//    a. call program (node {nameofprogram.js})
//    b. user is asked a question through inquirer package, response saved
//        -how to use inquirer to ask question (read documentation)
//2. transform data into predetermined format
//3. create file containing data