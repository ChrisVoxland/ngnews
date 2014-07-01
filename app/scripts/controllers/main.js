'use strict';

/**
 * @ngdoc function
 * @name ngnewsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngnewsApp
 */
angular.module('ngnewsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
