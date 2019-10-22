const gulp = require('gulp')
const nunjucksRender = require('gulp-nunjucks-render');
const htmlmin = require('gulp-htmlmin');
var surge = require('gulp-surge')



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

gulp.task('deploy', function () {
  return surge({
    project: '../docs',         // Path to your static build directory
    domain: 'sunscolam.surge.sh'  // Your domain or Surge subdomain
  });
});
