#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs');

const white = chalk.keyword('white');
const red = chalk.keyword('red');
 
console.log('');
console.log(white('🍹 Setting up...'));
console.log(white('  ✅ Having a lovely time.'));

if (shell.exec('defaults write ~/Library/Preferences/com.adobe.CSXS.10.plist PlayerDebugMode 1').code !== 0) {
    console.log(red('☠️ Error: Setting PlayerDebugMode failed'));
    shell.exit(1)
} 

console.log(white('  ✅ Enabled loading of unsigned panels.'));
console.log(white('  ✅ Fancy a cup of tea.'));
console.log('');