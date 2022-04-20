const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'location',
            message: 'Where do you live?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your LinkedIn URL?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub URL?',
        },
        {
            type: 'input',
            name: 'color',
            message: "My dude, what is your favorite color>",
        }
    ])
    .then((data) => {
        console.log(data);
        
        const name = data.name;
        const location = data.location;
        const linkedin = data.linkedin;
        const github = data.github;
        const color = data.color

        fs.writeFile(`${data.name}.html`, JSON.stringify(data, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });