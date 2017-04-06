var gulp = require('gulp');//build process converting jsx to js
var gutil = require('gulp-util');//console logging
var war = require('gulp-war');
var zip = require('gulp-zip');

gulp.task('war', function () {
    gulp.src(["./**","!./dist","!./coverage","!./node_modules","!./node_modules/**", "!./src", "!./src/**"])
        .pipe(war({
            welcome: 'index.html',
            displayName: 'DQM',
        }))
        .pipe(zip('DQM.war'))
        .pipe(gulp.dest("./dist"));

});
