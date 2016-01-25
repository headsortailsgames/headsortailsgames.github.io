(function() {
    var APP = angular.module('gameDisplayApp', ['ngMaterial']);

    APP.controller("GameDisplayController", function() {
        this.game_name = 'Crayon Click'
        this.icon_path = 'img/crayon_click_icon.png'
        this.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet neque sed lorem condimentum, nec sodales mauris tincidunt. Nunc metus augue, ornare sit amet fermentum quis, efficitur a turpis. Ut id nunc hendrerit erat aliquet faucibus. Integer eleifend orci sed ante vulputate, vitae posuere est faucibus. Nunc lacinia scelerisque mauris. Sed id congue eros. Proin fermentum augue ac risus convallis porta. Etiam efficitur at purus sit amet laoreet.'
        this.rating = 3.5
        this.screenshots = ['img/banner-screen.png',
                            'img/banner-description.png']
        this.isOpen = false;
        this.categories = ['Puzzle']
        this.team = [
            {name: "John Doe", email: "john@mail.com"},
            {name: "Jane Doe", email: "jane@mail.com"},
            {name: "John Lock", email: "lock@mail.com"},
            {name: "John Lock", email: "lock@mail.com"},
            {name: "John Lock", email: "lock@mail.com"},
            {name: "John Lock", email: "lock@mail.com"},
        ]
    });

})();
