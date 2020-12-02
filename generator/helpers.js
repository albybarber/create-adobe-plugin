const os = require('os');
const pascalcase = require('pascalcase');

const adobeExtPath = '/Library/Application\ Support/Adobe/CEP/extensions/';
const basePath = 'generator/templates/';
const SupportedAdobeProducts = [
    'Adobe Premiere Pro',
    // 'Illustrator',
    // 'InDesign',
    // 'Photoshop'
];

// Get the full path with os username to where the abobe extensions dir
const getAdobeExtPath = (name) => {
    return `${os.userInfo().homedir}${adobeExtPath}${pascalcase(name)}`;
};

const getDebugPath = (name) => {
    return `${os.userInfo().homedir}${adobeExtPath}${pascalcase(name)}/.debug`;
};

const getTemplatesPath = (product) => {
    let path = `${basePath}${pascalcase(product)}/`;
    let glob = `${path}**`;

    return { path, glob };
};

const getDebugTemplatesPath = (product) => {   
    return `${basePath}${pascalcase(product)}/debug.xml`
};

module.exports = {
    SupportedAdobeProducts,
    getAdobeExtPath,
    getDebugPath,
    getTemplatesPath,
    getDebugTemplatesPath,
};
