angular
.module('multiTicTacToe')
.directive('square', () ->
    return {
        controller: 'SquareCtrl as squareCtrl',
        replace: true,
        restrict: 'E',
        templateUrl: 'angularjs/square.html',
        scope: {},

        compile: () ->
    }
)
.controller('SquareCtrl', ($http, $rootScope) ->
    me = this
    me.click = () ->
        $rootScope.xo = if ($rootScope.xo == 'o') then 'x' else 'o'

        me.image = "assets/#{$rootScope.xo}.png"
        me.pushed = true

        request = {
            xo: $rootScope.xo
        }

        $http
        .post('<%=server[back]%>', request)
        .then((data) -> console.log(data.data))

    true
)