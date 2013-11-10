angular.module('tidtrello')
    .directive('card', function() {
        return {
            restrict: 'E',
            templateUrl: 'html/card.html',
            replace: true,
            link: function(scope, element, attrs) {
                scope.$watch('card.dragging', function(dragging) {
                    if (dragging) {
                        element.addClass('dragging');
                    } else {
                        element.removeClass('dragging');
                    }
                });

                scope.$watch('card.position', function(position) {
                    if (position) {
                        element.css({ 
                            left: position.x - 125,
                            top: position.y - 50
                        });
                    }
                });
            }
        }
    });
