const helpers = require('./generator/helpers.js');

module.exports = function (plop) {
    plop.setGenerator('make', {
        description: 'Create a new adobe plugin',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: '👋 What would you like to call your plugin?'
            },
            {
                type: 'list',
                name: 'wantDevServer',
                choices: [ 'yes', 'no'],
                message: 'Would you like a dev sever set up for you? (localhost:7777)'
            },
        ],
        actions: function(data) {
            let actions = [{
                type: 'addMany',
                // destination: 'GeneratedPlugins/{{ pascalCase name }}',
                destination: helpers.getAdobeExtPath(),
                base: helpers.templatesPath,
                templateFiles: helpers.templatesPathGlob,
            }];
 
            if(data.wantDevServer === 'yes') {
                actions.push({
                    type: 'add',
                    path: helpers.getDebugPath(),
                    templateFile: 'generator/templates/debug.xml'
                });
            }
 
            return actions;
        }
    });
};