module.exports = function (grunt)
{
    var localConfig = {
        typeScriptSrc: [
            "**/*.ts",
            "!MicrosoftAzureMobile.d.ts",
            "!node_modules/**/*.*",
            "!sample/**/*.*",
            "!bin/**/*.*"
        ],
        typeScriptDeclarations: [
            "**/*.d.ts",
            "!misc.d.ts",
            "!references.d.ts",
            "!node_modules/**/*.*",
            "!sample/**/*.*",
            "!bin/**/*.*"
        ],
        outDir: "bin/dist/"
    }

    grunt.initConfig({
        clean: {
            build: {
                src: [localConfig.outDir]
            }
        },
        ts: {
            build: {
                tsconfig: true
            }
        },
        tslint:
        {
            build:
            {
                src: localConfig.typeScriptSrc
                , options:
                {
                    configuration: grunt.file.readJSON("./tslint.json")
                }
            }
        },
        copy: {
            declarations: {
                files: [{ expand: true, src: localConfig.typeScriptDeclarations, dest: localConfig.outDir }]
            },
            platforms: {
                files: [{ expand: true, src: ["platforms/**"], dest: localConfig.outDir }]
            },
            subPackageConfig: {
                files: [{ expand: true, src: ["*/package.json", "!sample/**"], dest: localConfig.outDir }]
            }, 
            packageConfig: {
                src: "package.json",
                dest: localConfig.outDir,
                options: {
                    process: function (content, srcPath)
                    {
                        var contentAsObject = JSON.parse(content);
                        contentAsObject.devDependencies = undefined;
                        return JSON.stringify(contentAsObject, null, "\t");
                    }
                }
            },
            readme: {
                src: "README.md",
                dest: localConfig.outDir,
                options: {
                    process: function (content, srcPath)
                    {
                        return content.substring(content.indexOf("\n") + 1)
                    }
                }
            }
        },
        exec: {
            npm_publish: {
                cmd: "npm publish",
                cwd: localConfig.outDir
            }
        }
    });

    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks("grunt-tslint");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("build", [
        "tslint:build",
        "clean:build",
        "ts:build",
        "copy"
    ]);
    grunt.registerTask("publish", [
        "build",
        "exec:npm_publish"
    ]);
};