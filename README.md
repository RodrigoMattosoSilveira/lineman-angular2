# lineman-angular2

## Introduction
This is a plugin to get started with Angular.js using [Lineman](http://linemanjs.com). This plugin started as a fork of [lineman-angular](https://github.com/linemanjs/lineman-angular) lineman plugin for Angular 1. Its goal is to add support for [Angular 2](https://angular.io/). 

Using this plugin you can build pure [Angular 2](https://angular.io/) applications.

We recommend you look at a [Angular 2 template project](https://github.com/RodrigoMattosoSilveira/lineman-angular2-template/)  as a starting point.

## What's this plugin do?

This plugin will configure your lineman project to incorporate:

 * **files** definitions to support NG2 specific task management.
 * **grunt-ts** to compile Typescript (ts)files.
 * **Tasks** to manage NG2 files.
 * **Workflow** to execute NG2 build / run tasks.
 * **Watch** to watch NG2 files and trigger NG2 tasks.
 
## Assumptions
This plugin assumes:

* The following file structure
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
 
## Sample application
See the [lineman-angular2-template project](https://github.com/RodrigoMattosoSilveira/lineman-angular2-template) for a sample application of this plugin. 


