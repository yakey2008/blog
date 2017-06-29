module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'js/libjs/ionic.bundle.js',
                    'js/libjs/ionic-datepicker.app.js',
                    'js/libjs/ionic-datepicker.directive.js',
                    'js/libjs/ionic-datepicker.service.js',
                    'js/libjs/ionic-timepicker.app.js',
                    'js/libjs/ionic-timepicker.directive.js',
                    'js/libjs/ng-flow-standalone.js',
                    'js/libjs/fusty-flow.js',
                    'js/libjs/fusty-flow-factory.js',
                    'js/libjs/ngDialog.min.js',
                    'js/config.js',
                    'js/app.js',
                    'js/controllers.js',
                    'js/services.js',
                    'js/directive.js',
                    'js/leave-controller.js',
                    'js/overtime-controller.js',
                    'js/trouble-controller.js',
                    'js/reclockcard-controller.js',
                    'js/companybill-controller.js'
                ],
                dest: 'dist/js/mobile.app.js'
            },
            css: {
                src: [
                    'lib/ionic/release/css/ionic.css',
                    'lib/ionic-datepicker/src/ionic-datepicker.styles.css',
                    'lib/ionic-timepicker/src/ionic-timepicker.styles.css',
                    'lib/ng-dialog/css/ngDialog.min.css',
                    'css/style.css',
                    'css/ionicActionSheet.css'
                ],
                dest: 'dist/css/mobile.app.css' //
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //
            },
            buildall: {
                options: {
                    mangle: true,
                    compress: {
                        drop_console: true
                    },
                    report: "min" //
                },
                files: [{
                    //expand: true,   // 启用动态扩展
                    //cwd: 'js/',     // 源文件匹配都相对此目录
                    src: [
                        'js/libjs/ionic.bundle.js',
                        'js/libjs/ionic-datepicker.app.js',
                        'js/libjs/ionic-datepicker.directive.js',
                        'js/libjs/ionic-datepicker.service.js',
                        'js/libjs/ionic-timepicker.app.js',
                        'js/libjs/ionic-timepicker.directive.js',
                        'js/libjs/ng-flow-standalone.js',
                        'js/libjs/fusty-flow.js',
                        'js/libjs/fusty-flow-factory.js',
                        'js/libjs/ngDialog.min.js',
                        'js/app.js',
                        'js/config.js',
                        'js/controllers.js',
                        'js/directive.js',
                        'js/leave-controller.js',
                        'js/overtime-controller.js',
                        'js/services.js'
                    ],
                    dest: 'dist/js/mobile.app.min.js' //MobileAppAll.min.js       //dist/js/mobile.app.min.js
                }]
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'dist/css/mobile.app.min.css': [
                        'lib/ionic/release/css/ionic.css',
                        'lib/ionic-datepicker/src/ionic-datepicker.styles.css',
                        'lib/ionic-timepicker/src/ionic-timepicker.styles.css',
                        'lib/ng-dialog/css/ngDialog.min.css',
                        'css/style.css'
                    ]
                }
            }
        },
        rev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            assets: {
                files: [{
                    src: [
                        'dist/**/*.{js,css}'
                    ]
                }]
            }
        },
        copy: {
            font: {
                expand: true,
                cwd: 'lib/ionic/release/fonts/',
                src: '**',
                dest: 'dist/fonts/',
                flatten: true,
                filter: 'isFile',
            },
            img: {
                expand: true,
                src: 'img/*',
                dest: 'dist/',
            }
        },

        clean: {
            //			folder: ['path/to/dir/'],
            //			folder_v2: ['path/to/dir/**'],
            contents: ['dist/*']
            //			subfolders: ['path/to/dir/*/'],
            //			css: ['path/to/dir/*.css'],
            //			all_css: ['path/to/dir/**/*.css']
        },

        qunit: {

            all: {
                options: {
                    urls: [
                        'http://localhost:3000/test/index.html',
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: '.'
                }
            }
        },
        jshint: {
            files: ['js/**/*.js', 'test/**/*.js'],
            options: {
                //覆盖默认配置
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['clean', 'minall', 'concat', 'cssmin', 'files'],
                options: {
                    spawn: true,
                    interrupt: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');

    grunt.registerTask('files', ['copy:font', 'copy:img']);
    grunt.registerTask('minall', ['uglify:buildall']);
    grunt.registerTask('unittest', ['connect', 'qunit']);
    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('full', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', ['clean', 'minall', 'concat', 'cssmin', 'files','rev']);
};