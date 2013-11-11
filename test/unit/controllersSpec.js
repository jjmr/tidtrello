'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    beforeEach(function(){
        module('tidtrello');
    });
    describe('CardsController', function(){
      var scope, ctrl;

      beforeEach(inject(function($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('CardsController', {$scope: scope});
      }));

      it('my columns is defined', function() {
        expect(scope.columns).toBeDefined();
      });
    });
});
