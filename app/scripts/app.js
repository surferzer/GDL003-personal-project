'use strict';

/**
 * @ngdoc overview
 * @name gdl003PersonalProjectApp
 * @description
 * # gdl003PersonalProjectApp
 *
 * Main module of the application.
 */
angular
  .module('gdl003PersonalProjectApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/hello', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl',
        controllerAs: 'hello'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
