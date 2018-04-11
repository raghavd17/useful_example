# Sample Project to get started
    CSS Grid mixin example with 12 columns.
#Example 
    .classname {
       @include grid;
    }
    .feature {
        @include grid;
        // alignment : baseline, start, end, self-start, self-end, center, stretch
        @include cols(12, start);
        @include rows(12, start);
    }

    .classname {
        @include grid;
       // alignment : baseline, start, end, self-start, self-end, center, stretch
        @include cols(3, start);
        @media only screen and (min-width: 768px) {
            @include cols(3, start);
        }
    }
    
#Frontend
    The front-end development is powered primarily by Node, Grunt.
    The Styles is written in Sass with the SCSS syntax.

#Requirements and Installation

    * Install Node with the installer.
    * Install Grunt globally with $ npm install -g grunt


#Development

Install the required tool, utilities and libraries

$ npm install
$ npm update

#Tasks

This project uses Grunt to run automated tasks for development and production builds.

    grunt watch: Watches the changes and compiles preprocessors.

    grunt: Same as Grunt task runner, but will also run grunt (All the tasks).

    grunt sass: will check changes in the source folder using and compile scss
