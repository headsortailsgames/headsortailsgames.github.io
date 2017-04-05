(function() {
    'use strict';

    angular
        .module('app.home')
        .directive('gameItem', gameItem);

    function gameItem() {
        var directive = {
            templateUrl: '/app/home/directives/game-item.html',
            restrict: 'E',
            scope: {
                game: '=',
            },
            controller: gameItemController,
            controllerAs: 'vm',
            bindToController: true,
        };

        return directive;
    }

    gameItemController.$inject = [];

     /* @ngInject */
     function gameItemController() {
         var vm = this;
     }
})();
