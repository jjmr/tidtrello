angular.module('tidtrello')
    .factory('Cards', ['$resource', function($resource) {
        return $resource('/api/cards');
    }]);

