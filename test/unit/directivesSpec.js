'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
    var $scope, $compile;

    beforeEach(module('tidtrello'));
    beforeEach(module('html/card.html'));
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $scope = _$rootScope_;
        $compile = _$compile_;
    }));

    describe('Card :: ', function () {
        var compileDirective = function (markup, scope) {
            var el = $compile(markup)(scope);
            scope.$digest();
            return el;
        };
        it('toggle class when card.dragging change', function(){
            var element;
            $scope.card = {'dragging' : true};
            element = compileDirective('<card></card>', $scope);

            expect( element.hasClass('dragging') ).toBeTruthy();

            $scope.card.dragging = false;
            $scope.$digest();

            expect( element.hasClass('dragging') ).toBeFalsy();
        });
    });
});
