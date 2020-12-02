const {
    SupportedAdobeProducts,
    getAdobeExtPath,
    getDebugPath,
    getTemplatesPath,
    getDebugTemplatesPath,
} = require('./generator/helpers.js');

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
                name: 'product',
                choices: SupportedAdobeProducts,
                message: 'Which Adobe product are you building a plugin for?'
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
                destination: getAdobeExtPath(data.name),
                base: getTemplatesPath(data.product).path,
                templateFiles: getTemplatesPath(data.product).glob,
            }];
 
            if(data.wantDevServer === 'yes') {
                actions.push({
                    type: 'add',
                    path: getDebugPath(data.name),
                    templateFile: getDebugTemplatesPath(data.product)
                });
            }
 
            return actions;
        }
    });
};