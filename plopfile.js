let helpers = require('./generator/helpers.js');


module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('make', {
        description: 'Create a new adobe plugin',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What would you like to call your plugin?'
            },
            {
                type: 'list',
                name: 'type',
                choices: [ 'yes', 'no'],
                message: 'Would you like a dev sever set up for you?'
            },
        ],
        actions: [{
            type: 'addMany',
            // destination: 'GeneratedPlugins/{{ pascalCase name }}',
            destination: helpers.getAdobeExtPath(),
            base: helpers.templatesPath,
            templateFiles: helpers.templatesPathGlob,
        }
    ]
    });
};