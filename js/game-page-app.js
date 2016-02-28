(function() {
    var APP = angular.module('gameDisplayApp', ['ngMaterial']);

    APP.controller("GameDisplayController", function() {
        this.title = 'Crayon Click'
        this.header_image = "img/crayon_click_title.png"
        this.central_banner = "https://www.youtube.com/embed/WSVKbw7LC2w"
        this.download_button = "img/button_coming_soon.png"
        this.images = [
            {src: "img/banner-description.png", thumbnail: "img/banner-description.png", title: "Crayon Click Description"},
            {src: "img/banner-description.png", thumbnail: "img/banner-description.png", title: "Crayon Click Description"},
            {src: "img/banner-description.png", thumbnail: "img/banner-description.png", title: "Crayon Click Description"},
        ]
        this.description = 'Dear tester,\n\nMe, one of the most brilliant minds, created this extremely hard puzzle to test your brain and skills. You have just one goal: fill all the squares. And just one rule as well: touch in a square to change the adjacents color. If you beat all the 100+ levels, you will prove that are as brilliant as myself. Although this puzzle is brilliant, I didn’t had time to finish it, that is why I handled out the blueprints for my crew so they can finish the game. I hope that they don’t mess up.\n\nGood luck trying to solve all the puzzles,\nThe Engineer.'



        this.rating = 3.5
        this.screenshots = ['img/banner-screen.png',
                            'img/banner-instructions.png',
                            'img/banner-description.png']
        this.isOpen = false;
        this.categories = ['Puzzle']
        this.team = [
            {name: "Bruna Moreira",    role: "Designer", email: "brunanayaramlima@gmail.com", image: "img/avatar2.png"},
            {name: "Luciano Prestes",  role: "Developer", email: "lucianopcbr@gmail.com", image: "img/avatar3.png"},
            {name: "Matheus Faria", role: "Game Designer", email: "matheus.sousa.faria@gmail.com", image: "img/avatar1.png"},
            {name: "Rafael Reis",  role: "Musician", email: "rafareis_@live.com", image: "img/avatar3.png"},
            {name: "Lucas Moura", role: "Developer", email: "lucasmoura128@gmail.com", image: "img/avatar1.png"},
        ]

        this.details = [
            {icon: "date_range", icon_class: "material-icons", text: "Available in March 1st"},
            {icon: "extension", icon_class: "material-icons", text: "Version 1.0.0"},
            {icon: "mail_outline", icon_class: "material-icons", text: "headsortails.games@gmail.com"},
        ]
    });

    APP.filter('multilineText', ['$sce', function ($sce) {
        return function (text) {
            if (text !== undefined) return $sce.trustAsHtml(text.replace(/\n/g, '<br />'));
        };
    }]);
})();
