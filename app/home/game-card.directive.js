(function() {
    'use strict';

    angular
        .module('app.home')
        .directive('gameCard', gameCard);

    function gameCard() {
        var directive = {
            templateUrl: '/app/home/game-card.html',
            restrict: 'E',
            scope: {
                game: '=',
            },
            controller: gameCardController,
            controllerAs: 'vm',
            bindToController: true,
        };

        return directive;
    }

    gameCardController.$inject = [];

     /* @ngInject */
     function gameCardController() {
         var vm = this;
     }
})();
