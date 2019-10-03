const gulp = require("gulp");
const sass = require("gulp-sass");

// Watch for file changes
gulp.task("watch", done => {
  // Watch SASS files and compile when changed
  gulp.watch(
    "./src/site/assets/stylesheets/**/*.scss",
    gulp.series("stylesheets")
  );

  // Watch JS files and compile when changed
  gulp.watch(
    "./src/site/assets/scripts/**/*.js",
    gulp.series("scripts")
  );
  done();
});

// Compile SASS
gulp.task("stylesheets", done => {
   gulp
    .src("./src/site/assets/stylesheets/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/site/assets/static/css"));
  done();
});

gulp.task("scripts", done => {
  gulp
    .src("./src/site/assets/scripts/app.js")
    .pipe(gulp.dest("./src/site/assets/static/scripts"));
  done();
});

// Build task
gulp.task("build", gulp.series("stylesheets"));

// Development task
gulp.task("dev", gulp.parallel("watch", "stylesheets", "scripts"));
