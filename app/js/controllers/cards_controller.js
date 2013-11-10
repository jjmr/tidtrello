angular.module('tidtrello')
    .controller('CardsController', ['Cards', '$scope', function(Cards, $scope) {

        Cards.query(function(result) {            
            $scope.cards = result;
        });

        $scope.columns = [
            { name: 'TODO', cards: [] },
            { name: 'DOING', cards: [] },
            { name: 'TO TEST', cards: [] },
            { name: 'DONE', cards: [] }
        ];

        $scope.addCard = function(column) {
            var newCard = new Cards({ 
                editing: true,
                severity: 'critical',
                cardStatus: column.name
            });
            $scope.cards.push(newCard);
            $scope.editingCard = newCard;
        };

        $scope.saveCard = function(card) {
            card.editing = false;
            card.$save();
        };

        $scope.mousemove = function($event) {
            if ($scope.draggingCard) {
                $scope.draggingCard.position = {
                    x: $event.pageX,
                    y: $event.pageY
                };
            }
        };

        $scope.cardMouseDown = function(card) {
            if (!card.editing) {
                card.dragging = true;
                $scope.draggingCard = card;
            }
        };

        $scope.mouseup = function() {
            if ($scope.draggingCard) {
                $scope.draggingCard.dragging = false;
                $scope.draggingCard = null;
            }
        };

        $scope.columnMouseup = function(column) {
            if ($scope.draggingCard) {
                $scope.draggingCard.cardStatus = column.name;   
                //$scope.draggingCard.$save();
            }  
        };
    }]);
