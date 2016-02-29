(function() {
    var APP = angular.module('gameDisplayApp', ['ngMaterial']);

    APP.controller("GameDisplayController", function($scope) {
        this.title = 'Crayon Click'

        this.header_image = "img/crayon_click_title.png"
        this.central_banner = "https://www.youtube.com/embed/WSVKbw7LC2w"

        this.download_button = "img/button_coming_soon.png"
        this.images = [
            {src: "img/banner_description.png", thumbnail: "img/thumbnail/banner_description.png", title: "Crayon Click Description"},
            {src: "img/banner_instructions.png", thumbnail: "img/thumbnail/banner_instructions.png", title: "Crayon Click Description"},
            {src: "img/banner_worlds.png", thumbnail: "img/thumbnail/banner_worlds.png", title: "Crayon Click Description"},
            {src: "img/screenshot_1.png", thumbnail: "img/thumbnail/screenshot_1.png", title: "Crayon Click Description"},
            {src: "img/screenshot_2.png", thumbnail: "img/thumbnail/screenshot_2.png", title: "Crayon Click Description"},
            {src: "img/screenshot_3.png", thumbnail: "img/thumbnail/screenshot_3.png", title: "Crayon Click Description"},
            {src: "img/screenshot_4.png", thumbnail: "img/thumbnail/screenshot_4.png", title: "Crayon Click Description"},
            {src: "img/screenshot_5.png", thumbnail: "img/thumbnail/screenshot_5.png", title: "Crayon Click Description"},
            {src: "img/screenshot_6.png", thumbnail: "img/thumbnail/screenshot_6.png", title: "Crayon Click Description"},
        ]

        this.description = 'Dear tester,\n\nMe, one of the most brilliant minds, created this extremely hard puzzle to test your brain and skills. You have just one goal: fill all the squares. And just one rule as well: touch in a square to change the adjacents color. If you beat all the 100+ levels, you will prove that are as brilliant as myself. Although this puzzle is brilliant, I didn’t had time to finish it, that is why I handled out the blueprints for my crew so they can finish the game. I hope that they don’t mess up.\n\nGood luck trying to solve all the puzzles,\nThe Engineer.'


        this.company = {
            email: "headsortails.games@gmail.com",
            social_networks: [
                {link: "", icon: "fa-facebook-square"},
                {link: "", icon: "fa-youtube-play"},
            ]
        }

        this.footer_links = [
            {text: "Heads or Tails Games", link: ""},
            {text: "Press Kit", link: ""},
            {text: "Google Play", link: ""},
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
