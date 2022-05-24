'use strict';
var path = require('path');


/*
module.exports = function (grunt) {
  grunt.initConfig({

    watch: {
      //options: {  livereload: true,  },
      express: {
        files: ['./views/pages/index.ejs', 'app.js'],
        tasks: ['express'],
        options: {
          livereload: true,
          spawn: false,
        }
      }
    },

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
*/





module.exports = function (grunt) {
  grunt.initConfig({

    watch: {
      //options: {  livereload: true,  },
      express: {
        files: ['./views/pages/index.ejs', 'app.js'],
        tasks: ['express'],
        options: {
          //  livereload: true,
          spawn: false,
        }
      }
    },

    express: {
      all: {
        options: {
          bases: 'public',
          livereload: true,
          open: 'http://localhost:3000'
        }
      }
    },
    run: {
      options: {
        // Task-specific options go here.
      },
      your_target: {
        cmd: 'node',
        args: [
          'app.js'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-express');
  grunt.registerTask('default', ['run']);
  grunt.registerTask('start', ['express', 'watch']);

};





/*

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-run');
  grunt.loadNpmTasks('grunt-express');
  // Project configuration.
  grunt.initConfig({
  
    watch: {
      options: {
        livereload: true,
      },
      express: {
        files: ['./views/pages/index.ejs', './app.js'],
        tasks:  [ 'express:dev' ],
        livereload: true,
        spawn: false,
      
      }
    },
    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          hostname: '*',
          script: 'node',
          bases: 'public',
          livereload: true,
          open: 'http://localhost:3000'
        }
      }
    },
      run: {
        options: {
          // Task-specific options go here.
        },
        your_target: {
          cmd: 'node',
          args: [
            'app.js'
          ]
        }
      }


  });
 
  grunt.registerTask('default', ['run', 'express:dev', 'watch']);
};
*/

/*
var path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    express: {
      options: {
        port: 3000,
        hostname: '*'
      },
      livereload: {
        options: {
          server: path.resolve('./app.js'),
          livereload: true,
          serverreload: true,
          bases: [path.resolve('./public')]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');

  grunt.registerTask('default', ['express', 'express-keepalive']);
};*/

