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
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7 //Compression level
        },
        files: [{
          expand: true, //Dynamic expansion
          cwd: 'views/images/',
          src: ['*.png'],
          dest: 'dist/views/images/',
          ext: '.png'
        },{
          expand: true,
          cwd: 'img/',
          src: ['*.png'],
          dest: 'dist/img/',
          ext: '.png'
        }]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [{
          expand: true, //Dynamic expansion
          cwd: 'views/images/',
          src: ['*.jpg'],
          dest: 'dist/views/images/',
          ext: '.jpg'
        },{
          expand: true,
          cwd: 'img/',
          src: ['*.jpg'],
          dest: 'dist/img/',
          ext: '.jpg'
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