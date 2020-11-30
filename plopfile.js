const settings = require('./generator/settings.js');

module.exports = function (plop) {
    // create your generators here
    plop.setGenerator('make', {
        description: 'Create a new adobe plugin',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'What would you like to call your plugin?'
        }],
        actions: [{
            type: 'addMany',
            destination: 'GeneratedPlugins/{{ pascalCase name }}',
            base: settings.BoilerplateAppPath,
            templateFiles: 'generator/templates/BoilerplateApp/**', // TODO - get this to use the base setting
        }]
    });
};