/**
 * Browserify files with React as an option.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [browserify](https://github.com/gruntjs/grunt-browserify)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-browserify
 */
module.exports = function(grunt) {

  var version = grunt.file.readJSON('package.json').version;
  var pipeline = require('../pipeline');

  grunt.config.set('browserify', {
        js: {
          src : '.tmp/public/js/app.js',
          dest: '.tmp/public/browserify/debug.' + version + '.js'
        },
        options: {
          transform: [
            ['babelify', {
              presets: ["es2015"]
            }]
          ]
        }
  });

  grunt.loadNpmTasks('grunt-browserify');
};
