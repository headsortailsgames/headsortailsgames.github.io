(function() {
    'use strict';

    angular
        .module('app')
        .factory('StudioService', StudioService);

    StudioService.$inject = [];

    /* @ngInject */
    function StudioService() {
        var service = {
            info: info(),
            stores: stores(),
        };

        return service;

        ////////////

        var google_play_url = 'https://play.google.com/store/apps/dev?id=5680804993477078845';

        function info() {
            return {
                'name': 'Heads or Tails Games',
                'facebook_url': 'https://www.facebook.com/headsortailsgames',
                'google_play_url': google_play_url,
                'youtube_url': 'https://www.youtube.com/channel/UCoZELmQB-hp3UvH5UHY1dqg',
                'email': 'headsortails.games@gmail.com',
                'copyright': '© Heads or Tails Games 2017 Copyright',
                'site_url': 'headsortailsgames.com',
            };
        };

        function stores() {
            return [
                {
                    'name': 'Google Play Store',
                    'link': google_play_url,
                    'image': 'assets/img/app/google-play.png',
                },
            ];
        };
    }
})();
