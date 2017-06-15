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
                    list: list.id,
                    title: title
                };
                $http.post('/board/cards/', card)
                    .then(function(response){
                        list.cards.push(response.data);
                    }, function(){
                        alert("could not create card");
                    });
            };

            $scope.login = function(){
                $http.post('/auth_api/login/',
                    {
                        username: 'admin',
                        password: 'testing123'
                    });
            };

            $scope.data = [];
            $http.get('/board/lists/').then(function(response){
                $scope.data = response.data;

            });

        }

    }())