(function() {
    var APP = angular.module('landingPageApp', ['ngMaterial']);

    APP.controller("LandingPageController", function($scope) {
        this.title = 'Crayon Click'
        this.header_image = "img/crayon_click_title.png"
        this.central_banner = "https://www.youtube.com/embed/RgS1rUMnGQY"
        this.background_src = "img/background.png"

        this.download_button = "img/button_coming_soon.png"

        this.images = [
            {src: "img/banner_description.png", thumbnail: "img/thumbnail/banner_description.png", title: "Crayon Click Description"},
            {src: "img/banner_instructions.png", thumbnail: "img/thumbnail/banner_instructions.png", title: "Learn How to Play"},
            {src: "img/banner_worlds.png", thumbnail: "img/thumbnail/banner_worlds.png", title: "Many Worlds"},
            {src: "img/screenshot_1.png", thumbnail: "img/thumbnail/screenshot_1.png", title: "Loading..."},
            {src: "img/screenshot_2.png", thumbnail: "img/thumbnail/screenshot_2.png", title: "Home Screen"},
            {src: "img/screenshot_3.png", thumbnail: "img/thumbnail/screenshot_3.png", title: "Here is the game map"},
            {src: "img/screenshot_4.png", thumbnail: "img/thumbnail/screenshot_4.png", title: "Easy level"},
            {src: "img/screenshot_5.png", thumbnail: "img/thumbnail/screenshot_5.png", title: "Victory o/"},
            {src: "img/screenshot_6.png", thumbnail: "img/thumbnail/screenshot_6.png", title: "It is getting a bit difficult"},
        ]

        this.description = 'Dear tester,\n\nMe, one of the most brilliant minds, created this extremely hard puzzle to test your brain and skills. You have just one goal: fill all the squares. And just one rule as well: touch in a square to change the adjacents color. If you beat all the 100+ levels, you will prove that are as brilliant as myself. Although this puzzle is brilliant, I didn’t had time to finish it, that is why I handled out the blueprints for my crew so they can finish the game. I hope that they don’t mess up.\n\nGood luck trying to solve all the puzzles,\nThe Engineer.'


        this.company = {
            email: "headsortails.games@gmail.com",
            social_networks: [
                {link: "https://www.facebook.com/headsortailsgames/", icon: "fa-facebook-square"},
                {link: "https://www.youtube.com/channel/UCoZELmQB-hp3UvH5UHY1dqg", icon: "fa-youtube-play"},
            ]
        }

        this.footer_links = [
            {text: "Heads or Tails Games", link: "headsortailsgames.github.io"},
            {text: "Press Kit", link: "#"},
            {text: "Google Play", link: "https://play.google.com/store/apps/dev?id=5680804993477078845"},
        ]
    });

    APP.filter('multilineText', ['$sce', function ($sce) {
        return function (text) {
            if (text !== undefined) return $sce.trustAsHtml(text.replace(/\n/g, '<br />'));
        };
    }]);

    APP.filter('bannerURL', ['$sce', function ($sce) {
        return function (url) {
            if (url !== undefined)
                return $sce.trustAsResourceUrl(url + "?controls=2&showinfo=0");
        }
    }]);

})();
