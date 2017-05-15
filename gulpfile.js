'use strict';

const gulp          = require('gulp');
const gulpNgConfig  = require('gulp-ng-config');
const dotenv        = require('gulp-dotenv');
const rename        = require('gulp-rename');
const map           = require('map-stream');

// In this list, the key is the key value in .env
// The value is the key for the angular constant
const clientEnvs = {
            'NO_CAPTCHA_SITE_KEY': 'noCaptchaSiteKey'
};

gulp.task('config', function() {
  gulp.src('.env') // read .env file
    .pipe(dotenv()) // manage with gulp-dotenv
    .pipe(map(function (file, cb) { // remove keys not in clientEnvs
      let objectIn = JSON.parse(file.contents);
      let objectOut = {};
      for (let prop in clientEnvs) {
        if (objectIn.hasOwnProperty(prop)) {
          objectOut[clientEnvs[prop]] = objectIn[prop];
        }
      }
      file.contents = new Buffer(JSON.stringify(objectOut));
      cb(null, file);
    }))
    .pipe(rename('config.json')) // output file config.json
    .pipe(gulpNgConfig('myApp', { // make Angular constants
      createModule: false
    }))
    .pipe(gulp.dest('client')); // save file in dist/env/config.js
});
