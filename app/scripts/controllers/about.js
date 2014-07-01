'use strict';

/**
 * @ngdoc function
 * @name ngnewsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngnewsApp
 */
angular.module('ngnewsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
