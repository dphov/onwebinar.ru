let gulp = require('gulp'),
  browserSync = require('browser-sync');

gulp.task('server', () => {
  notify: false,
    browserSync({
      server: {
          baseDir: 'public',
          routes: {
                      '/bower_components': 'bower_components',
                    },
        },
    });
});
