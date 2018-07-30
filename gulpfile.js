const gulp = require('gulp');
const zip = require('gulp-zip');
const gulpif = require('gulp-if');
const rename = require('gulp-rename');

const zipper = (name) => gulp.src([`${name}/*.js`, 'node_modules/**', 'package.json'], { base : "." })
  .pipe(gulpif(`${name}/*.js`, rename((path) => path.dirname = '')))
  .pipe(zip(`${name}.zip`, {base: './source/'}))
  .pipe(gulp.dest('build'));

gulp.task('zip:CompileCode:code', () => zipper('CompileCode'));

gulp.task('zip:GetLanguages:code', () => zipper('GetLanguages'));

gulp.task('zip:GetOutputV2:code', () => zipper('GetOutputV2'));

gulp.task('zip', [
  'zip:GetOutputV2:code',
  'zip:GetLanguages:code',
  'zip:CompileCode:code',
]);