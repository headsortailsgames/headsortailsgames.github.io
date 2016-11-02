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
        vm.carouselSetup = carouselSetup;

        // Private
        function activate() {
            getBannerList();
        }


        var games = AppService.gameList();

        function carouselSetup() {
            console.log("----------------");
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop: true,
                margin: 10,
                nav: true,
                animateOut: 'slideOutDown',
                animateIn: 'slideInUp',
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
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
