// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your github username?",
    name: "title",
  },
  {
    type: "input",
    message: "Please enter a description for your README.",
    name: "description",
  },
  {
    type: "input",
    message: "Please enter installation instructions for your README.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please enter usage information for your README.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please enter contribution guidelines for your README.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Please enter test instructions for your README.",
    name: "tests",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const exportData = generateMarkdown(data);
  return fs.writeFileSync(fileName, exportData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
