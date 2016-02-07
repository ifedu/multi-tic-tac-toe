// <reference path='angular.d.ts' />

angular
.module('multiTicTacToe')
.directive('square', () => {
    return {
        controller: 'SquareCtrl as squareCtrl',
        replace: true,
        restrict: 'E',
        templateUrl: 'angularjs/square.html',
        scope: {}
    }
})
.controller('SquareCtrl', function ($http, $rootScope) {
    this.click = () => {
        $rootScope.xo = ($rootScope.xo === 'o') ? 'x' : 'o'

        this.image = `assets/<%=$%>{$rootScope.xo}.png`
        this.pushed = true

        const request = {
            xo: $rootScope.xo
        }

        $http
        .post('<%=server[back]%>', request)
        .then((data) => console.log(data.data))
    }
})