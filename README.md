# create-adobe-plugin

### Installation and usage
To install (or update to the latest version):

```
npm install -g create-adobe-plugin && create-adobe-plugin--setup
```

> npm is a commonly used package managment system used to install JavaScript based applications.

![cli gif](https://raw.github.com/albybarber/create-adobe-plugin/master/cap-cli.gif)

#### Available commands
```
create-adobe-plugin - Creates an adobe plugin
create-adobe-plugin--setup - Configures your system for developer mode
```
### Prerequisites
* Install the [npm](https://www.npmjs.com/) JS package manager
* Install [Abobe CC Premiere Pro](https://www.adobe.com/products/premiere.html)

## TODOs
* Windows support
    * Plugin paths
    * setup for windows 
* Add bundling:
    - The
        [ZXPSignCmd](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD/4.0.7)
        signing utility creates signed .zxp bundles for Add-Ons or direct
        distribution.
    - Microsoft Visual Studio Code, and the ExtendScript debugging extension. This extension running in VSCode is Adobe's recommended ExtendScript development environment. Sorry, ExtendScript Toolkit; you had a good long run.

    - Use the [ExManCmd](https://www.adobeexchange.com/resources/28) command line
        utility to test .zxp installation.




