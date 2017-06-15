/**
 * Created by abbh62 on 6/14/2017.
 */
(function(){
        'use strict';

        angular.module('board.demo', [])
            .controller('BoardController', ['$scope','$http', BoardController]);

        function BoardController($scope, $http){
            $scope.add = function(list, title){
                var card = {
                    title: title
                };
                list.cards.push(card)
            };

            $scope.data = [];
            $http.get('/board/lists').then(function(response){
                $scope.data = response.data;

            });

        }

    }())