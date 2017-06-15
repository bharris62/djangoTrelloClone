/**
 * Created by abbh62 on 6/15/2017.
 */
(function() {
    'use strict';

    angular.module('board.demo')
        .directive('boardCard', CardDirective);

    function CardDirective() {
        return {
            templateUrl: '/static/board/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http) {
                var url = '/board/cards/' + $scope.card.id + '/';
                $scope.update = function() {
                    $http.put(
                        url,
                        $scope.card
                    );
                };

                $scope.delete = function(){
                    $http.delete(url).then(
                        function(){
                            var cards = $scope.list.cards;
                            cards.splice(
                                cards.indexOf($scope.card),
                                1
                            );
                        }
                    );
                };
                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    }
})();