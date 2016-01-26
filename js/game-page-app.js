(function() {
    var APP = angular.module('gameDisplayApp', ['ngMaterial']);

    APP.controller("GameDisplayController", function() {
        this.game_name = 'Crayon Click'
        this.icon_path = 'img/crayon_click_icon.png'
        this.description = 'Crayon Click is a puzzle game with more than 100 levels.\nTest your brain and relax with the simple and yet challenging gameplay.\nEnjoy different worlds with different designs for the puzzles'
        this.rating = 3.5
        this.screenshots = ['img/banner-screen.png',
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
            {icon: "date_range", icon_class: "material-icons", text: "Available in 29 February"},
            {icon: "extension", icon_class: "material-icons", text: "Version 1.0.0"},
            {icon: "mail_outline", icon_class: "material-icons", text: "headsortails.games@gmail.com"},
        ]
    });

})();
