// <reference path='angular.d.ts' />

angular
.module('multiTicTacToe')
.controller('ParentCtrl', function ($rootScope) {
    $rootScope.xo = 'o'
})