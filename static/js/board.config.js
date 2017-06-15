(function(){
   'use strict';
   angular.module('board.demo').run(['$http', run]);

   function run($http) {
       $http.defaults.xsrfHeaderName = 'X-CSRFToken';
       $http.defaults.xsrfCookieName = 'csrftoken';
   }
})();

