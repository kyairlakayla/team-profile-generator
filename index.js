const inquirer = require('inquirer');
//const team = [];

const addToTeam = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Add an employee or select FINISH if complete.',
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finish"
            ]
        }
]).then(function(data) {
        const employeeRole = data.addEmployee;       
        if (employeeRole === "Manager") {
           managerInfo();
      } else if (employeeRole === "Engineer") {
           engineerInfo();
       } else if (employeeRole === "Intern") {
           internInfo();
        } else if (employeeRole === "Finish") {
            renderTeam();
        }
    });
}

const managerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Manager name:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Manager ID:'
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'Manager E-mail:'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Manager office phone number:'
        }
    ]).then(function(data) {
//        const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
//      team.push(manager);
       addToTeam();
    });
}

const engineerInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Engineer Name:'
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'Engineer ID:'
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'Engineer E-mail:'
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'Engineer GitHub link:'
        }
    ]).then(function(data) {
//       const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerGithub);
//        team.push(engineer);
        addToTeam();
    });
}

const internInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'Intern name:'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'Intern ID:'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'Intern E-mail:'
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Intern School:'
        }
    ]).then(function(data) {
//        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
//        team.push(intern);
        addToTeam();
    });
}

addToTeam();