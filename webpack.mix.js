const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'resources/assets/vendor/bootstrap/css/bootstrap.min.css',
        'resources/assets/vendor/fontawesome/css/all.min.css',
        'resources/assets/chatbox-template/css/styles.css',
    ], 'public/css/inbox.css')
    .scripts([
        'resources/assets/vendor/jquery/jquery.min.js',
        'resources/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        'resources/assets/vendor/fontawesome/js/all.min.js',
    ], 'public/js/inbox.js');