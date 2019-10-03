const gulp = require("gulp");
const sass = require("gulp-sass");

// Watch for file changes
gulp.task("watch", done => {
  // Watch SASS files and compile when changed
  gulp.watch(
    "./src/site/assets/stylesheets/**/*.scss",
    gulp.series("stylesheets")
  );
  done();
});

// Compile SASS
gulp.task("stylesheets", done => {
   gulp
    .src("./src/site/assets/stylesheets/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/site/assets/static"));
  done();
});

// Build task
gulp.task("build", gulp.series("stylesheets"));

// Development task
gulp.task("dev", gulp.parallel("watch", "stylesheets"));
