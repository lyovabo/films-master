'use strict';

/**
 * @ngdoc overview
 * @name filmsApp
 * @description
 * # filmsApp
 *
 * Main module of the application.
 */
var filmApp = angular
  .module('filmsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.router'

  ])
  .constant("api", {
  "url": "http://api.themoviedb.org/"
});
