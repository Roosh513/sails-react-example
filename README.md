# Todo Application with Sails + React + Flux

This project provides an example of configuring a [Sails](http://sailsjs.org) project to use ReactJS + Flux. This also provides
a task configuration for Babel to transpile ES6 syntax for the front-end code.

This project provides a basic Task model and depends on the [Blueprint controller methods](http://sailsjs.com/documentation/reference/blueprint-api) to provide APIs for the front-end application.

A shortcut for the unfamiliar. The bulk of the application's functionality can be found here:

1. tasks/config
  1. babel.js
  2. browserify.js
2. assets/js/*
3. api/models/Task.js

# Installation

Clone the project and change to the working directory and install node dependencies

`npm install`

Start the application by using the sails lift command:

```
sails lift
```

Navigate to http://localhost:1337
