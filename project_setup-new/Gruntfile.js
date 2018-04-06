module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
      // Metadata.
      pkg: grunt.file.readJSON('package.json'),
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
      // Task configuration.
      sass: { // Task
        cssdev: { // Target
          options: { // Target options
            style: 'expanded',
            sourcemap: 'true'
          },
          files: { // Dictionary of files
            'css/custom_main.css': 'scss/main.scss', // 'destination': 'source'
          }
        },
        cssproduction: { // Target
          options: { // Target options
            style: 'compressed',
            sourcemap: 'false'
          },
          files: { // Dictionary of files
            'css/custom_main.min.css': 'scss/main.scss', // 'destination': 'source'
          }
        },
      },
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true,
          separator: ';'
        },
        //  css: {
        //    src: ['css/main.min.css'],
        //    dest: 'css/style.min.css',
        //  },

      },
      
    watch: {
      all: {
        files : ['scss/**/*.scss', 'Gruntfile.js'],
        tasks: ['sass','concat'],
        options: {
            spawn: false,
        },
      },
    },
  });

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-sass');

// Default task.
grunt.registerTask('default', ['sass', 'concat']);

};
