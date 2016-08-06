module.exports = function(lineman) {
    return {
        files: {
            ng2: {
                libs: [
                    "systemjs.config.js",
                    "node_modules/@angular/**",
                    "node_modules/systemjs/**",
                    "node_modules/core-js/**",
                    "node_modules/reflect-metadata/**",
                    "node_modules/rxjs/**",
                    "node_modules/zone.js/**",
                    "node_modules/angular2-in-memory-web-api/**"
                ],
                css: [
                    // used in conjunction with the CWD option
                    "**/*.css"
                ],
                html: [
                    // used in conjunction with the CWD option
                    "**/*.html"
                ],
                index: {
                    generated: "generated/",
                    dist: "dist/"
                },
                img: [
                    // used in conjunction with the CWD option
                    "**/*.ico"
                ],
                "systemjs": {
                    generated: "generated/",
                    dist: "dist/"
                },
                transpiled: [
                    "**/*.js"
                ],
                ts: [
                    // used in conjunction with the CWD option
                    "**/*.ts"
                ],
                generated: "generated/app",
                dist: "dist/app",
                app: "app",
                test: "spec"
            },
        },
        config: {
            /*
             * Load grunt modules used by this plugin
             */

            loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-contrib-copy", "grunt-ts"),

            /*
             * Task Configuration
             */
            copy: {
                // ****************
                // generated folder
                // ****************
                "ng2-all-files-to-generated": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd: "<%= files.ng2.app %>",
                    src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>", "<%= files.ng2.img %>", "<%= files.ng2.ts %>"],
                    dest: "<%= files.ng2.generated %>"
                },
                "ng2-css-files-to-generated": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd:  "<%= files.ng2.app %>",
                    src: "<%= files.ng2.css %>",
                    dest: "<%= files.ng2.generated %>"
                },
                "ng2-html-files-to-generated": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd:  "<%= files.ng2.app %>",
                    src: "<%= files.ng2.html %>",
                    dest: "<%= files.ng2.generated %>"
                },
                // Copies the angular 2 libraries to the dist folder.
                // Executed by the "lineman build" command
                "ng2-index-file-to-generated": {
                    src: "index.html",
                    dest: "<%= files.ng2.index.generated %>"
                },
                "ng2-libs-to-generated": {
                    files: [
                        {expand: true, src: "<%= files.ng2.libs %>", dest: "generated/"}
                    ]
                },
                "ng2-ts-files-to-generated": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd:  "<%= files.ng2.app %>",
                    src: "<%= files.ng2.ts %>",
                    dest: "<%= files.ng2.generated %>"
                },
                "ng2-ts-files-to-generated": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd:  "<%= files.ng2.app %>",
                    src: "<%= files.ng2.ts %>",
                    dest: "<%= files.ng2.generated %>"
                },
                // Copies the angular 2 libraries to the dist folder.
                // Executed by the "lineman build" command
                "ng2-systemjs-file-to-generated": {
                    src: "systemjs.config.js",
                    dest: "<%= files.ng2.systemjs.generated %>"
                },
                // ****************
                // dist folder
                // ****************
                "ng2-all-files-to-dist": {
                    // See Copy files to different directory (https://github.com/gruntjs/grunt-contrib-copy/issues/58)
                    // I used to ensure that the compiled ts files (js / map) and their companions (ts / html / css) landed on the same folder
                    expand: true,
                    cwd:  "<%= files.ng2.app %>",
                    src: ["<%= files.ng2.css %>", "<%= files.ng2.html %>", "<%= files.ng2.img %>"],
                    dest: "<%= files.ng2.dist %>"
                },
                "ng2-traspiled-files-to-dist": {
                    expand: true,
                    cwd:  "<%= files.ng2.generated %>",
                    src: ["<%= files.ng2.transpiled %>"],
                    dest: "<%= files.ng2.dist %>"
                },
                // Copies the angular 2 libraries to the dist folder.
                // Executed by the "lineman build" command
                "ng2-index-file-to-dist": {
                    src: "index.html",
                    dest: "<%= files.ng2.index.dist %>"
                },
                "ng2-libs-to-dist": {
                    files: [
                        {expand: true, src: "<%= files.ng2.libs %>", dest: "dist/"}
                    ]
                },
                "ng2-systemjs-file-to-dist": {
                    src: "systemjs.config.js",
                    dest: "<%= files.ng2.systemjs.dist %>"
                },
            },

            // Task to compile typescript files
            // Look here for config options: https://www.npmjs.com/package/grunt-ts
            ts: {
                development: {
                    "src": "<%= files.ng2.app %>" + "/**/*.ts",
                    "outDir": "<%= files.ng2.generated %>",
                    "options": {
                        "emitDecoratorMetadata": true,
                        "module": "system",
                        "moduleResolution": "node",
                        "noImplicitAny": false,
                        "removeComments": false,
                        "sourceMap": true,
                        // using es5 is problematic with NG2-beta
                        // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                        "target": "es6"
                    }
                },
                spec: {
                    "src": "<%= files.ng2.test %>" + "/**/*.ts",
                    "outDir": "<%= files.ng2.generated %>",
                    "options": {
                        "emitDecoratorMetadata": true,
                        "module": "system",
                        "moduleResolution": "node",
                        "noImplicitAny": false,
                        "removeComments": false,
                        "sourceMap": true,
                        // using es5 is problematic with NG2-beta
                        // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                        "target": "es6"
                    }
                },
                production: {
                    "src": "<%= files.ng2.app %>" + "/**/*.ts",
                    "outDir": "<%= files.ng2.dist %>",
                    "options": {
                        "emitDecoratorMetadata": true,
                        "module": "system",
                        "moduleResolution": "node",
                        "noImplicitAny": false,
                        "removeComments": false,
                        "sourceMap": false,
                        // using es5 is problematic with NG2-beta
                        // http://stackoverflow.com/questions/33332394/angular-2-typescript-cant-find-names
                        "target": "es6"
                    }
                }
            },

            clean: {
                generated: ["generated/*"],
                dist: ["dist/*"]
            },

            /*
             * Watch configuration
             */
            watch: {
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_css: {
                    "files": "<%= files.ng2.css %>",
                    "tasks": ["copy:ng2-css-files-to-generated"]
                },
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_html: {
                    "files": "<%= files.ng2.html %>",
                    "tasks": ["copy:ng2-html-files-to-generated"]
                },
                ng2_index: {
                    "files": "index.html",
                    "tasks": ["copy:ng2-index-file-to-generated"]
                },
                ng2_systemjs: {
                    "files": "systemjs.config.js",
                    "tasks": ["copy:ng2-systemjs-file-to-generated"]
                },
                // renamed & deleted files remain in place, restarting lineman run will fix it
                ng2_ts: {
                    "files": "<%= files.ng2.ts %>",
                    "tasks": ["ts:development"]
                }
            },

            /*
             * Workflow configuration
             */
            prependTasks: {
                common: ["clean:generated", "clean:dist", "ts:development"].concat(lineman.config.application.prependTasks.common),
                dev: ["copy:ng2-systemjs-file-to-generated", "copy:ng2-index-file-to-generated", "copy:ng2-all-files-to-generated", "copy:ng2-libs-to-generated"].concat(lineman.config.application.prependTasks.dev),
                dist: ["copy:ng2-systemjs-file-to-dist", "copy:ng2-index-file-to-dist", "copy:ng2-all-files-to-dist",  "copy:ng2-traspiled-files-to-dist", "copy:ng2-libs-to-dist"].concat(lineman.config.application.prependTasks.dev)
            }
        }
    };
};