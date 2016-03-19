var publicAssets = './public/assets';
var sourceFiles = './app/assets';

module.exports = {
    publicAssets: publicAssets,
    browserSync: {
        server: {
            baseDir: "./public"
        },
        notify: false,
        open: false,
        port: 5001,
        files: [publicAssets + '/main.js', publicAssets + '/main.css'],
        ui: {
            port: 5002
        }
    },
    styles: {
        src: sourceFiles + '/stylesheets/src/**.scss',
        folder_src: sourceFiles + '/stylesheets/src/**/*.scss',
        dest: sourceFiles + '/stylesheets/dist/',
        settings: {}
    },
    scripts: {
        watch: sourceFiles + '/javascripts/dist/**.js',
        clean: sourceFiles + '/javascripts/dist/**',
        dest: sourceFiles + '/javascripts/dist/'
    },
    images: {
        folder_src: sourceFiles + '/images/src/**/*.{jpg,png,gif,svg}',
        src: sourceFiles + '/images/src',
        dest: sourceFiles + '/images/dist/'
    },
    templates: {
        folder_src: 'app/views/**/*.{erb, html, haml, jade}'
    }
};
