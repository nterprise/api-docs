/* eslint-disable no-console */
const {series} = require('gulp');
const nodemon = require('gulp-nodemon');
const exec = require('child_process').exec;
const path = require('path');
const glob = require('glob');

const folders = {
    bin: 'bin/',
    source: 'src/',
    tests: 'tests/',
    public: 'public/',
    build: 'data/build/',
    docs: 'data/docs/',
    package: 'data/build/nodejs',
    temp_dir: 'data/tmp/',
};

const lint = (cb) => {
    const files = glob.sync(`${folders.docs}**/*/openapi.json`);

    Promise.all(
        files.map((file) => {
            return new Promise(((resolve, reject) => {
                exec(
                    `./node_modules/.bin/swagger-cli validate ${file}`,
                    {},
                    (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        resolve();
                    }
                );
            }));
        })
    ).
        then(() => cb()).
        catch((err) => {
            cb(err);
        });
};

const build = (cb) => {
    const files = glob.sync(`${folders.docs}**/*/openapi.json`);

    Promise.all(
        files.map((file) => {
            return new Promise(((resolve, reject) => {
                console.log(file);
                let outFile = path.dirname(file);
                outFile = outFile.substr(outFile.lastIndexOf('/') + 1);

                exec(
                    `./node_modules/.bin/swagger-cli bundle ${file} > ${folders.public}api/${outFile}.json`,
                    {},
                    (err, data) => {
                        if (err) {
                            reject(err);
                            return;
                        }

                        resolve();
                    }
                );
            }));
        })
    ).
        then(() => cb()).
        catch((err) => {
            cb(err);
        });
};

const serve = (done) => {
    const stream = nodemon({
        script: 'bin/www',
        watch: folders.docs,
        ext: 'html js json',
        done: done,
    });

    stream.on('restart', () => {
        console.log('restarted!');
        lint(() => {});
        build(() => {});
    }).on('crash', () => {
        console.error('Application has crashed!\n')
        stream.emit('restart', 10)
    })
}

exports.lint = lint;
exports.build = build;
exports.test = lint;
exports.serve = series(lint, build, serve);

exports.default = series(lint, build);
