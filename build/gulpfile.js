const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');


gulp.task('nunjucks', function() {
    // Gets .html and .nunjucks files in pages
    return gulp.src('app/pages/**/*.+(html|njk)')
    // Renders template with nunjucks
    .pipe(nunjucksRender({
        path: ['app/templates']
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    // output files in app folder
    .pipe(gulp.dest('../docs'))
});

gulp.task('img', function() {
    return gulp.src('static/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('../docs/img'))
})