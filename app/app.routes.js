angular.module('app').
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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

    // Remove the # from links. Requires the <head><base href="\"><\head> on index
    $locationProvider.html5Mode(true);
}]);
