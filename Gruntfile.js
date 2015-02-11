module.exports = function(grunt) {

  //var mozjpeg = require('imagemin-mozjpeg');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      generated: {
        files: [
          {
            dest: 'dist/js/perfmatters.js',
            src: [
              'js/perfmatters.js'

            ]
          },
          {
            dest: 'dist/views/js/main.js',
            src: [
              'views/js/main.js'

            ]
          }
        ]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/css/',
          ext: '.css'
        },{
          expand: true,
          cwd: 'views/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'dist/views/css/',
          ext: '.css'
        }]
      }
    },
    imagemin: {                          // Task
//      static: {                          // Target
//        options: {                       // Target options
//          optimizationLevel: 3,
//          svgoPlugins: [{ removeViewBox: false }],
//          use: [mozjpeg()]
//        },
//        files: {                         // Dictionary of files
//          'dist/img.png': 'src/img.png', // 'destination': 'source'
//          'dist/img.jpg': 'src/img.jpg',
//          'dist/img.gif': 'src/img.gif'
//        }
//      },
      dynamic: {                         // Another target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'views/images/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/views/images/'                  // Destination path prefix
        },{
          expand: true,                  // Enable dynamic expansion
          cwd: 'img/',                   // Src matches are relative to this path
          src: ['*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'dist/img/'                  // Destination path prefix
        }]
      }
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'dist/index.html': 'index.html',     // 'destination': 'source'
          'dist/project-2048.html': 'project-2048.html',
          'dist/project-mobile.html': 'project-mobile.html',
          'dist/project-webperf.html': 'project-webperf.html',
          'dist/views/pizza.html': 'views/pizza.html'
        }
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');


  // Default task(s).
  grunt.registerTask('default', ['concat', 'cssmin', 'imagemin', 'htmlmin']);

  //grunt.registerTask('build', ['useminPrepare', 'concat:generated', 'cssmin:generated', 'imagemin', 'htmlmin', 'usemin']);


};