# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [0.0.6] - 2016 08 06
This was originally written as an extension of the [lineman-angular](https://github.com/linemanjs/lineman-angular) plugin, which was instrumental for me to get it to work. It turns out that Angular 2 is so different that it makes sense to remove this dependency.

### Updates
### Fixed the following bugs
1. watch:ng2_ts copies files to generated unnecessarily - the ts task routes the files to generated, rendering the copy surplefous
1. lineman build does not copy compiled ts files to their dist folders.

### Added functionality
1. Clear the generated and dist folders 

## [0.0.5] - 2016 08 06
This was originally written as an extension of the [lineman-angular](https://github.com/linemanjs/lineman-angular) plugin, which was instrumental for me to get it to work. It turns out that Angular 2 is so different that it makes sense to remove this dependency.

### Updates
* Changed the assumed file structure. The assumed file structure will be:
````bash
your-project-name
|-- .gitignore
|-- app/
    |
    |- main/
       |- main.css
       |- main.html
       |- main.ts
    |- yourModuleA/
       |- moduleA.css
       |- moduleA.html
       |- moduleA.ts
    |- .../
    |- yourModuleN/
       |- moduleN.css
       |- moduleN.html
       |- moduleN.ts    
    |- app.css
    |- bootstrap.ts
|-- config/
|-- dist/
|-- generated/
|-- node_modules/
|-- spec/
    |
    |- *_spec.ts
|-- spec-e2e/
    |
    |- *_spec-e2e.ts
|-- tasks/
|-- CHANGELOG.md
|-- Gruntfile.js
|-- LICENSE
|-- README.md
|-- index.html
|-- package.json
|-- systems.config.js
|-- tslint.json
|-- typings.json
````
* Updated the plugin logic to reflect the new folder structure.

## [0.0.4] - 2016-07-31
Fixed bug injected in v0.0.3 (my apologies, I'm still learning about how to support open source node plugins - easier said than done!)

## [0.0.3] - 2016-07-30
A few minor refactoring in preparation for a majod change to its sister project, lineman-angular2-template whereby it will transition to be a pure Angular 2 template.

### Added
* CHANGELOG.md - hereon I'll keep a high level change log.
* Added an .gitignore file
* Added a CHANGELOG.md file
* Added a peer dependency to the original lineman-angular

### Updates
* Updated packages.json key to remove angular1 reference.
* Updated the configuration to copy ts file to to generated folder

## [0.0.2] - 2016-07-11
### Added
* Initial Release.