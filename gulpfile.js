var gulp = require('gulp');

// Compiles SASS to CSS
var stylus = require('gulp-stylus');

// Compiles all SCSS to CSS in /app/styles.
// Saves CSS in same folder
gulp.task('stylus', function () {
    return gulp.src('./public/styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./public/styles'));
        //.pipe(connect.reload());
});