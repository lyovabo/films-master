'use strict'
import angular from 'angular';
/**
 * @ngdoc overview
 * @name filmsApp
 * @description
 * # filmsApp
 *
 * Main module of the application.
 */
var filmApp = angular.module('filmsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.router'

  ])
  .constant("api", {
  "url": "http://api.themoviedb.org/"
});
// require('./directives');
// require('./services');
// require('./controllers');