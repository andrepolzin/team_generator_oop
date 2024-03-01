var inquirer = require('inquirer');

const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const buildTeam = require('./buildTeam');

const teamMembers = [];


const createManager = function () {

    inquirer
        .prompt([
            { type: 'input', name: 'managerName', message: "Enter manager's name: " },
            { type: 'input', name: 'managerId', message: "Enter manager's ID: " },
            { type: 'input', name: 'managerEmail', message: "Enter manager's email: " },
            { type: 'input', name: 'managerOfficeNum', message: "Enter manager's office number: " },

        ])
        .then((answers) => {

            const newManager = new Manager(answers.managerName, answers.managerId,
                answers.managerEmail, answers.managerOfficeNum
            );
            teamMembers.push(newManager);
            showMenu();
        })
        .catch((error) => {
            console.log(error);
        });

};

const createEngineer = function () {

    inquirer
        .prompt([
            { type: 'input', name: 'engineerName', message: "Enter Engineer's name: " },
            { type: 'input', name: 'engineerId', message: "Enter Engineer's ID: " },
            { type: 'input', name: 'engineerEmail', message: "Enter Engineer's email: " },
            { type: 'input', name: 'engineerGitHub', message: "Enter Engineer's GitHub: " },

        ])
        .then((answers) => {
            const newEngineer = new Engineer(answers.engineerName, answers.engineerId,
                answers.engineerEmail, answers.engineerGitHub
            );
            teamMembers.push(newEngineer);
            showMenu();
        })
        .catch((error) => {
            console.log(error);
        });


};

const createIntern = function () {

    inquirer
        .prompt([
            { type: 'input', name: 'internName', message: "Enter Intern's name: " },
            { type: 'input', name: 'internId', message: "Enter Intern's ID: " },
            { type: 'input', name: 'internEmail', message: "Enter Intern's email: " },
            { type: 'input', name: 'internSchool', message: "Enter Intern's school: " },

        ])
        .then((answers) => {
            const newIntern = new Intern(answers.internName, answers.internId,
                answers.internEmail, answers.internSchool
            );
            teamMembers.push(newIntern);
            showMenu();
        })
        .catch((error) => {
            console.log(error);
        });

};



const showMenu = function () {

    inquirer
        .prompt([
            {
                type: 'list', name: 'action', message: "Choose what you want to do next: ",
                choices: ['Add Engineer', 'Add Intern', 'Done building team']
            },
        ])
        .then((answers) => {
            if (answers.action === 'Add Engineer') {
                createEngineer();
            } else if (answers.action === 'Add Intern') {
                createIntern();
            } else {
                buildTeam(teamMembers);
            }

        })
        .catch((error) => {
            console.log(error);
        });

};


module.exports = createManager;

