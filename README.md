# Todo Application with Sails + React + Flux

This project provides an example of configuring a [Sails](http://sailsjs.org) project to use ReactJS + Flux. This also provides
a task configuration for Babel to transpile ES6 syntax for the front-end code.

This project provides a basic Task model and depends on the [Blueprint controller methods](http://sailsjs.com/documentation/reference/blueprint-api) to provide APIs for the front-end application.

A shortcut for the unfamiliar: the bulk of the application's functionality can be found here:

1. tasks/config
  1. babel.js
  2. browserify.js
2. assets/js/*
3. api/models/Task.js

# Installation

Ensure you have the latest version of [Sails](http://sailsjs.org) installed.

`npm install -g sails`

Clone the project and change to the working directory and install node dependencies

`npm install`

Start the application by using the sails lift command:

`sails lift`

You're all set! You should be able to navigate to http://localhost:1337. It may take an extra moment for browserify to finish building the JS bundle. The process is automatically kicked off when the `lift` command is executed.
