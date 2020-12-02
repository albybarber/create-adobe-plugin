# create-adobe-plugin

### Installation and usage

To install (or update to the latest version):

```
yarn global add create-adobe-plugin
```

> Yarn is a commonly used package manemnet system used to install JavaScript based applications.

#### Available commands
```
plop make - Creates an adobe plugin
plop setup - Configures your system for developer mode
```
### Prerequisites

* Install the [Yarn](http://) JS package manager
* Install [Abobe CC Premiere Pro](http://)


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




