var app = angular.module('appName', ['templates', 'ngRoute', 'ngResource', 'ngAnimate']);
app.config([
  '$routeProvider', function($routeProvider,$locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: "../assets/templates/index.html",
        controller: 'HomeController'});
  }
]);