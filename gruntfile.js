'use strict';
var path = require('path');



module.exports = function(grunt) {
  grunt.initConfig({

    watch: {    
      options: {  livereload: true,  },
      express: {
                 files:  [ './views/pages/index.ejs' ,'app.js'],
                 tasks:  [ 'express' ],
                 options: {livereload: true,
                          spawn: false,
                          }
               }
              } ,

              
              express: {
                all: {
                  options: {
                    bases: 'public',
                    livereload: true,
                    open: 'http://localhost:3000'
                  }
                }
              },
  });
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('start', ['express', 'watch']);
};


