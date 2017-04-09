(function() {
    'use strict';

    angular
        .module('app.home')
        .directive('gameCard', gameCard);

    function gameCard() {
        var directive = {
            templateUrl: '/app/home/directives/game-card.html',
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

    gameCardController.$inject = ['GamesService'];

     /* @ngInject */
     function gameCardController(GamesService) {
         var vm = this;

         vm.gameUrl = GamesService.gameUrlSlug(vm.game);
     }
})();
