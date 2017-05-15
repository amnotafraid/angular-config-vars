'use strict';

var express       = require('express');
var path          = require('path');

var gulp          = require('gulp'); // Load gulp
var dotenv        = require('dotenv');

dotenv.config();

/* The gulpfile is going to read the dotenv file and
 * make dist/scripts/env/config.js which looks like this:
 *
 * angular.module('clientApp.config', [])
 *  .constant('jChartFxLicense', '...')
 *  .constant('noCaptchaSiteKey', '...');
 */


require('./gulpfile'); // Loads our config task
gulp.start('config');

var app = express();

// serve client side files
app.use(express.static(path.join(__dirname, '/client')));

app.listen(3000);

console.log('Listening on port 3000');
