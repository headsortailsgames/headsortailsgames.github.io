angular.module('app').
config(function($routeProvider) {
    $routeProvider

    // Whatever
    .when('/', {
        templateUrl: 'app/home/home.html'
    })

    .when('/404', {
        template: '<div> Sorry dave, I can\'t do that </div>'
    })

    //Otherwise
    .otherwise({redirectTo:'/404'});
});
