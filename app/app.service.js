(function() {
    'use strict';

    angular
        .module('app')
        .factory('AppService', AppService);

    AppService.$inject = [];

    /* @ngInject */
    function AppService() {

        this.gameUrl = function(game) {
            return 'game/' + game.id;
        };

        this.headOrTailsInfo = function() {
            return {
                'facebook_page_url': 'https://www.facebook.com/headsortailsgames',
                'google_play_page_url': 'https://play.google.com/store/apps/dev?id=5680804993477078845',
                'youtube_page_url': 'https://www.youtube.com/channel/UCoZELmQB-hp3UvH5UHY1dqg',
                'email': 'headsortails.games@gmail.com',
                'copyright': '© Heads or Tails Games 2016 Copyright',
                'site_url': 'headsortailsgame.com'
            };
        };

        this.gameList = function() {
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
                    'icon': '',
                    'small_icon': '',
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
                    'icon': '',
                    'small_icon': '',
                    'imgs': {
                     },
                    'released': false,
                    'template_url': '',
                },
            ];

            return list;
        };

        return this;
    }
})();
