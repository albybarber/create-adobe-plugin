# create-adobe-plugin

Create Adobe Plugin is an tool that makes it easy to start developing Adobe plugins. It offers a CLI and configuration options to get you started. Currently it supports Adobe Premiere Pro and OSX.


### Installation and CLI usage
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

### Development
Under the hood the project uses [Yarn](https://yarnpkg.com/), [Plop](https://www.npmjs.com/package/plop) and a little bit of BASH.

#### Available commands
```
yarn make - Starts the flow to create an adobe plugin using plop
yarn setup - Starts the flow to for developer mode using a bin script
```

#### Bolilerplate Apps
The boilerplate apps are a collection of sample applications although they were not originally written by the developers of this tool, they have been edited to work with the generator. 

* AdobePremierePro: [PProPanel](https://github.com/Adobe-CEP/Samples/tree/master/PProPanel)


#### Resources 
* [Adobe Common Extensibility Platform (CEP)](https://www.adobe.io/apis/creativecloud/cep.html)
* [Adobe CEP sample extensions](https://github.com/Adobe-CEP/Samples)

## TODOs
* Windows support
    * Plugin paths
    * setup for windows 
* Support for other Adobe products:
    * 'Illustrator'
    * 'InDesign'
    * 'Photoshop'

* Custom plugin prefix  e.g. com.[insert].plugin

* Add bundling:
    - The
        [ZXPSignCmd](https://github.com/Adobe-CEP/CEP-Resources/tree/master/ZXPSignCMD/4.0.7)
        signing utility creates signed .zxp bundles for Add-Ons or direct
        distribution.
    - Microsoft Visual Studio Code, and the ExtendScript debugging extension. This extension running in VSCode is Adobe's recommended ExtendScript development environment. Sorry, ExtendScript Toolkit; you had a good long run.

    - Use the [ExManCmd](https://www.adobeexchange.com/resources/28) command line
        utility to test .zxp installation.




