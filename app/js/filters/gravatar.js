angular.module('tidtrello')
    .filter('gravatar', function() {
        return function(input) {
            var md5 = input ? hex_md5(input) : '';
            return 'http://www.gravatar.com/avatar/' + md5;
        };
    });
