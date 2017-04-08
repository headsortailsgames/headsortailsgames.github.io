(function() {
    'use strict';

    angular
        .module('app')
        .factory('GamesService', GamesService);

    GamesService.$inject = [];

    /* @ngInject */
    function GamesService() {
        var service = {
            findGameById: findGameById,
            findGameByNameSlug: findGameByNameSlug,
            gameList: gameList(),
            gameUrl: gameUrl,
            mainGame: getMainGame(),
            topGames: getTopGames(),
        };

        return service;

        ////////////

        function findGameById(id) {
            var list = gameList();
            var game_found;

            list.forEach(function(game) {
                if (game.id === id)
                    game_found = game;
            });

            return game_found;
        };

        function findGameByNameSlug(slug) {
            var list = gameList();
            var game_found;

            list.forEach(function(game) {
                if (game.name_slug === slug)
                    game_found = game;
            });

            return game_found;
        };

        function gameUrl(game) {
            return 'game/' + game.id;
        };

        function getMainGame() {
            return findGameByNameSlug('crayonclick');
        };

        function getTopGames() {
            return [
                findGameByNameSlug('crayonclick'), // Main banner
                findGameByNameSlug('superracing'), // Top minor banner
                findGameByNameSlug('crayonclick'), // Bottom minor banner
            ];
        };

        function gameList() {
            var list = [
                // // Game Name
                // {
                //     'id': 0, // Must be unique
                //     'name': 'Game Name', // Full printable Game name
                //     // Short game name version, without spaces or captital letters
                //     'name_slug': 'gamename',
                //     // Google Play Url
                //     'google_play_url': '',
                //     // Banner displayed on home page
                //     'home_banner': '',
                //     // All banners used on promos, facebook, etc...
                //     'banners': [],
                //     // Game screenshots
                //     'screenshots': [],
                //     // Promo/Teaser Video (Youtube Link)
                //     'promo_video_url': '',
                //     // Full release Trailer (Youtube Link)
                //     'trailer_video_url': '',
                //     // Full Game description
                //     'game_description': '',
                //     // Game short description, max of 150 words
                //     'game_short_description': '',
                //     'icon': '',
                //     'small_icon': '', // Small version of the icon
                //     // Image map to be used on the page
                //     'imgs': {
                //          'image_name': 'image_path',
                //      },
                //     // If the game was released or not
                //     'released': false,
                //     // Game Page HTML
                //     'template_url': '',
                // },



                // Crayon Click
                {
                    'id': 0,
                    'name': 'Crayon Click',
                    'name_slug': 'crayonclick',
                    'google_play_url': 'https://play.google.com/store/apps/details?id=headsortails.crayonclick.game.android',
                    'home_banner': 'assets/img/crayonclick/home-banner.png',
                    'banners': [],
                    'screenshots': [],
                    'promo_video_url': '',
                    'trailer_video_url': '',
                    'game_description': '',
                    'game_short_description': '',
                    'icon': 'assets/img/crayonclick/icon.png',
                    'small_icon': 'assets/img/crayonclick/icon.png',
                    'imgs': {
                     },
                    'released': false,
                    'template_url': '',
                },

                // Super Racing
                {
                    'id': 1,
                    'name': 'Super Racing',
                    'name_slug': 'superracing',
                    'google_play_url': 'https://play.google.com/store/apps/details?id=project.superracing',
                    'home_banner': 'assets/img/superracing/home-banner.png',
                    'banners': [],
                    'screenshots': [],
                    'promo_video_url': '',
                    'trailer_video_url': '',
                    'game_description': '',
                    'game_short_description': '',
                    'icon': 'assets/img/superracing/icon.png',
                    'small_icon': '',
                    'imgs': {
                     },
                    'released': false,
                    'template_url': '',
                },
            ];

            return list;
        };
    }
})();
