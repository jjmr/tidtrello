module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
      'app/js/lib/angular.js',
      'app/js/lib/angular-*.js',
      'test/lib/angular/angular-mocks.js',
      'app/js/**/*.js',
      'test/unit/**/*.js',
      'app/html/*.html'
    ],

    exclude : [
      'app/lib/angular/angular-loader.js',
      'app/lib/angular/*.min.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // html2js
    preprocessors: {
      'app/html/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/'
    }

})}
