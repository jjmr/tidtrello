'use strict';

/* jasmine specs for filters go here */

describe('filter', function() {
    beforeEach(function(){
        module('tidtrello');
    });
    describe('Filter Gravatar :: ', function(){
        /*
        it('change email to MD5 and add in Gravatar Url', inject(function(gravatarFilter) {
            var email = 'davidg@tid.es';
            var result = 'http://www.gravatar.com/avatar/4bc8b60baa191c3e92a58be646794b17';
            expect(gravatarFilter(email)).toBe(result);
        }));
        */
        var gravatar;
        beforeEach(inject(function(gravatarFilter) {
            gravatar = gravatarFilter;
        }));
        it('change email to MD5 and add in Gravatar Url', function(){
            var email = 'davidg@tid.es';
            var result = 'http://www.gravatar.com/avatar/4bc8b60baa191c3e92a58be646794b17';
            expect(gravatar(email)).toBe(result);
        });
    });
});
