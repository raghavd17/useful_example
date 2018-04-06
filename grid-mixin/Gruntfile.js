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
            style: 'expanded'
          },
          files: { // Dictionary of files
            'css/main.css': 'scss/main.scss', 
            // 'destination': 'source'
          }
        },
        cssproduction: { // Target
          options: { // Target options
            style: 'compressed'
            // sourcemap: 'false'
          },
          files: { // Dictionary of files
            'css/main.min.css': 'scss/main.scss', 
            // 'destination': 'source'
          }
        },
      },
      concat: {
        options: {
          banner: '<%= banner %>',
          stripBanners: true,
          separator: ';'
        },
        // css: {
        //   src: ['css/main.min.css'],
        //   dest: 'css/production.min.css',
        // },
        // script: {
        //   src: [
   
        //         'script/script.js',
        //         'script/main.js'],
        //   dest: 'script/production.concat.js'
        // },
        // extrasJs: {
        //   src: ['script/main.js', 'script/custom.js'],
        //   dest: 'js/with_custom.js',
        // },

      },

  });

// These plugins provide necessary tasks.
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-sass');
// grunt.loadNpmTasks('grunt-iconfont');
// grunt.loadNpmTasks('grunt-contrib-imagemin');

// Default task.
grunt.registerTask('default', ['sass', 'concat' ]);

};
