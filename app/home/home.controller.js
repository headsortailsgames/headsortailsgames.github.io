(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['GamesService', 'StudioService'];

    /* @ngInject */
    function HomeController(GamesService, StudioService) {
        var vm = this;

        // Public
        vm.games = GamesService.gameList;
        vm.main_game = GamesService.mainGame;
        vm.stores = StudioService.stores;
        vm.studio_info = StudioService.info;

        // Private
        function activate() {
        }

        activate();
    }
})();
