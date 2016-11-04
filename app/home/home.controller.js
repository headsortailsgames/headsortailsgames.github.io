(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['AppService'];

    /* @ngInject */
    function HomeController(AppService) {
        var vm = this;

        // Public
        vm.banners = [];

        // Private
        function activate() {
            getBannerList();
            carouselSetup()
        }


        var games = AppService.gameList();

        function carouselSetup() {
            $('#carousel-example-generic').carousel({
                interval: 2000,
                pause: "hover",
                wrap: true,
                keyboard: true,
            })
        }

        function getBannerList() {
            for(var i = 0; i < games.length; ++i)
            {
                if(games[i].home_banner)
                {
                    vm.banners.push({
                        'id': vm.banners.length,
                        'image': games[i].home_banner,
                        'link': AppService.gameUrl(games[i]),
                    });
                }
            }
        };

        activate();
    }
})();
