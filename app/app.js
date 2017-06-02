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
import filmListService from './services/FilmListService.module';
import MainController from './controllers/main/MainController';
import SerialController from './controllers/serial/SerialController';
// console.log(mainController)
export const filmsApp = angular.module('filmsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    filmListService
  ])
  .constant("api", {
  "url": "http://api.themoviedb.org/"
});

  filmsApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function($locationProvider, $stateProvider, $urlRouterProvider) {
      $locationProvider.baseHref = "/";
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
      });

      $urlRouterProvider.otherwise('/');
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/views/main.html',
        controller: 'MainController'
      })
      $stateProvider.state('serial', {
        url: '/serial/{id}/season/{sid}/episode/{eid}',
        templateUrl: 'app/views/serial.html',
        controller: 'SerialController'
      })

    }
  ]);
filmsApp.controller('SerialController',SerialController);
filmsApp.controller('MainController',MainController);
