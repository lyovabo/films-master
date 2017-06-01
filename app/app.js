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
 // import filmListService from './services/FilmListService.module';
 // import * as MainController from './controller/main/MainController.module';
 // import * as SerialController from './controller/serial/SerialController.module';

// export const filmsApp = angular.module('filmsApp', [
//     'ngCookies',
//     'ngSanitize',
//     'ngRoute',
//     'ui.router',
//     FilmListService,
//     MainController,
//     SerialController

//   ])
//   .constant("api", {
//   "url": "http://api.themoviedb.org/"
// });

//   filmsApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
//     function($locationProvider, $stateProvider, $urlRouterProvider) {
//       $locationProvider.baseHref = "/";
//       $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: true
//       });

//       $urlRouterProvider.otherwise('/');
//       $stateProvider.state('home', {
//         url: '/',
//         templateUrl: 'app/views/main.html',
//         controller: 'MainCtrl'
//       })
//       $stateProvider.state('serial', {
//         url: '/serial/{id}/season/{sid}/episode/{eid}',
//         templateUrl: 'app/views/serial.html',
//         controller: 'SerialCtrl'
//       })

//     }
//   ]);
// import Test from './test'
// let t = new Test();]
import filmListService from './services/FilmsListService.module';
import d from './test';
console.log(d);