const os = require('os');

const templatesPath = 'generator/templates/PProPanel/';
const adobeExtPath = '/Library/Application\ Support/Adobe/CEP/extensions/';
const templatesPathGlob = `${templatesPath}**`;

// Get the full path with os username to where the abobe extensions dir
const getAdobeExtPath = () => {
    return `${os.userInfo().homedir}${adobeExtPath}{{ pascalCase name }}`;
};

module.exports = {
    getAdobeExtPath,
    templatesPath,
    templatesPathGlob,
}
