module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: './public/javascripts/vendor'
        }
      }
    },
    modernizr: {
      // [REQUIRED] Path to the build you're using for development.
      "devFile" : "bower_components/modernizr/modernizr.js",

      // [REQUIRED] Path to save out the built file.
      "outputFile" : "public/javascripts/vendor/modernizr/modernizr-custom.js",

      // Based on default settings on http://modernizr.com/download/
      "extra" : {
          "shiv" : true,
          "printshiv" : false,
          "load" : true,
          "mq" : false,
          "cssclasses" : true
      },

      // Based on default settings on http://modernizr.com/download/
      "extensibility" : {
          "addtest" : false,
          "prefixed" : false,
          "teststyles" : false,
          "testprops" : false,
          "testallprops" : false,
          "hasevents" : false,
          "prefixes" : false,
          "domprefixes" : false
      },

      // By default, source is uglified before saving
      "uglify" : true,

      // Define any tests you want to implicitly include.
      "tests" : [],

      // By default, this task will crawl your project for references to Modernizr tests.
      // Set to false to disable.
      "parseFiles" : true,

      // When parseFiles = true, matchCommunityTests = true will attempt to
      // match user-contributed tests.
      "matchCommunityTests" : false
    },

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/stylesheets/app.css': 'scss/app.scss'
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-modernizr");
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('build', ['sass']);
  grunt.registerTask('update', ['bower', 'modernizr', 'build']);
  grunt.registerTask('default', ['build', 'watch']);
};