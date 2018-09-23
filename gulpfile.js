'use strict'

const Gulp = require('gulp')
const RequireDir = require('require-dir')

// Load tasks
RequireDir('./tasks')

Gulp.task('dev', ['dotenv', 'nodemon'])
Gulp.task('prod', ['dotenv', 'pm2']) // 'dotenv' should be removed from prod task in a production environment.

Gulp.task('default', ['dev'])
