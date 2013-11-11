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

      it('add card in scope.cards', function() {
        var name = 'CardTest';
        $httpBackend.flush();
        scope.addCard({name:name});
        expect(scope.cards[0]).toBeDefined();
        expect(scope.cards[0].cardStatus).toEqual(name);
        expect(scope.editingCard.cardStatus).toEqual(name);
      });

      it('save my card', function(){
        var card;
        $httpBackend.flush();
        scope.addCard({name:'CardTest'});
        card = scope.editingCard;
        spyOn(card, '$save');
        scope.saveCard(card);

        expect(card.editing).toBeFalsy();
        expect(card.$save).toHaveBeenCalled();
      });

    });
});
