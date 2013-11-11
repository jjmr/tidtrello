'use strict';

/* jasmine specs for controllers go here */

describe('controllers', function() {
    beforeEach(function(){
        module('tidtrello');
    });
    describe('CardsController :: ', function(){
      var scope, ctrl, CardsInstance, $httpBackend;

      beforeEach(inject(function(_$httpBackend_, $rootScope, $controller, Cards) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('/cards').
            respond([]);


        scope = $rootScope.$new();
        CardsInstance = Cards;
        ctrl = $controller('CardsController', {$scope: scope, Cards: Cards});
      }));

      it('my columns is defined', function() {
        expect(scope.columns).toBeDefined();
      });

      it('my cards is defined', function() {
        $httpBackend.flush();
        expect(scope.cards).toBeDefined();
        expect(scope.cards.length).toEqual(0);
      });

    });
});
