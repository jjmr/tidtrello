'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    beforeEach(function(){
        module('tidtrello');
    });
    describe('My module is defined', function(){
        var module = angular.module('tidtrello');
        expect(module).toBeDefined();
    });
});
