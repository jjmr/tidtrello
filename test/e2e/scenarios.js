'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {
    describe('TODO column', function(){
        beforeEach(function() {
            browser().navigateTo('index.html');
        });
        it('put card in his column', function(){
            expect(repeater('#column-TODO .card').count()).toBe(2);
        });
    });
    describe('DOING column', function(){
        beforeEach(function() {
            browser().navigateTo('index.html');
        });
        it('put card in his column', function(){
            expect(repeater('#column-DOING .card').count()).toBe(1);
        });
    });

});
