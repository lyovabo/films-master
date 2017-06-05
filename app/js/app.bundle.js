webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FilmListService_module__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_main_MainController__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_serial_SerialController__ = __webpack_require__(64);


__webpack_require__(99);
/**
 * @ngdoc overview
 * @name filmsApp
 * @description
 * # filmsApp
 *
 * Main module of the application.
 */



// console.log(mainController)
const filmsApp = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('filmsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    __WEBPACK_IMPORTED_MODULE_1__services_FilmListService_module__["a" /* default */]
  ])
  .constant("api", {
  "url": "http://api.themoviedb.org/"
});
/* harmony export (immutable) */ __webpack_exports__["filmsApp"] = filmsApp;


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
filmsApp.controller('SerialController',__WEBPACK_IMPORTED_MODULE_3__controllers_serial_SerialController__["a" /* default */]);
filmsApp.controller('MainController',__WEBPACK_IMPORTED_MODULE_2__controllers_main_MainController__["a" /* default */]);


/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class MainController {
  constructor($scope,FilmsListService) {
    this.$scope = $scope;
    this.FilmsListService = FilmsListService;
    this.init();
  }
  init() {
    this.$scope.page = 1;
    this.loadSeriesList()
  }
  loadSeriesList(){
    var self = this;
    self.$scope.loading = true;
    self.FilmsListService.getSerialList(this.$scope.page).then(function (data) {
      self.$scope.loading = false;
      self.$scope.serialsList = data.data;
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainController;

MainController.$inject = ['$scope','FilmListService'];


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class SerialController {
    constructor($scope, $stateParams, FilmListService) {
        this.$scope = $scope;
        this.$scope.stateParams = $stateParams;
        this.FilmListService = FilmListService;
        this.loadSerialData();
        this.init();
    }
    init() {
        this.$scope.getSelectedEpisode = (episodeData) => {
            if (episodeData.episode_number == this.$scope.stateParams.eid) {
                return 'selected';
            }
        }
        this.$scope.getSelectedSeason = (seasonData) => {
            if (seasonData.season_number == this.$scope.stateParams.sid) {
                return 'selected';
            }
        }
    }
    loadSerialData() {
        this.$scope.loading = true;
        let loading = () => {
            if (this.$scope.serialFullData && this.$scope.seasonData && this.$scope.episodeData) {
                this.$scope.loading = false;
            }
        }
        this.FilmListService.getSerialFullInfo(this.$scope.stateParams.id).then((fullData) => {

            this.$scope.serialFullData = fullData.data;
            loading();
        })
        this.FilmListService.getSeasonData(this.$scope.stateParams.id, this.$scope.stateParams.sid, this.$scope.stateParams.eid).then((seasonData) => {
            this.$scope.seasonData = seasonData.data;
            loading();
        })
        this.FilmListService.getSerialData(this.$scope.stateParams.id, this.$scope.stateParams.sid, this.$scope.stateParams.eid).then((data) => {
            this.$scope.episodeData = data.data;
            loading();
        });



    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SerialController;

SerialController.$inject = ['$scope', '$stateParams', 'FilmListService'];


/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// (function (filmApp) {
//   var key = '?api_key=e51bd1241b07fe860a6e3f9b9ae173cc';
//   var serialListUrl = '3/discover/tv' + key + '&sort_by=popularity.desc&with_genres=18';
//   var FilmsListService = ['$http', 'api', function ($http, api) {
//     var FilmList = {};

//     /**
//      * @description Retrieve serial list from server
//      * @param (Number) page  id
//      * @returns {promise}
//      */

//     FilmList.getSerialList = function (page) {
//       page = page || 1;
//       return $http({
//         url: api.url + serialListUrl + '&page=' + page,
//         method: "GET"
//       });
//     };

//     /**
//      * @description Retrieve exact data for concrete movie
//      * @param serialId
//      * @param seasonId
//      * @param episodeId
//      * @returns {*}
//      */
//     FilmList.getSerialData = function (serialId, seasonId, episodeId) {
//       return $http({
//         url: api.url + '3/tv/' + serialId + '/season/' + seasonId + '/episode/' + episodeId + key,
//         method: "GET"
//       });

//     };

//     /**
//      * @description Retrieve season data for selected serial
//      * @param serialId
//      * @param seasonId
//      * @returns {*}
//      */
//     FilmList.getSeasonData = function (serialId, seasonId) {
//       return $http({
//         url: api.url + '3/tv/' + serialId + '/season/' + seasonId + key,
//         method: "GET"
//       });

//     };
//     /**
//      * @description Retrieve full meta information
//      * @param serialId
//      * @param seasonId
//      * @returns {*}
//      */
//     FilmList.getSerialFullInfo = function (serialId) {
//       return $http({
//         url: api.url + '3/tv/' + serialId + key,
//         method: "GET"
//       });

//     };

//     return FilmList;
//   }];
//   filmApp.factory('FilmsListService', FilmsListService);

// })(filmApp);



 class FilmListService {
  constructor($http, api) {
    this.$http = $http;
    this.api = api;
    this.key = '?api_key=e51bd1241b07fe860a6e3f9b9ae173cc';
    this.serialListUrl = '3/discover/tv' + this.key + '&sort_by=popularity.desc&with_genres=18';
  }
  getSerialList(page) {
      page = page || 1;
      return this.$http({
        url: this.api.url + this.serialListUrl + '&page=' + page,
        method: "GET"
      });
    };

    /**
     * @description Retrieve exact data for concrete movie
     * @param serialId
     * @param seasonId
     * @param episodeId
     * @returns {*}
     */
    getSerialData(serialId, seasonId, episodeId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + '/season/' + seasonId + '/episode/' + episodeId + this.key,
        method: "GET"
      });

    };

    /*
     * @description Retrieve season data for selected serial
     * @param serialId
     * @param seasonId
     * @returns {*}
     */
    getSeasonData(serialId, seasonId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + '/season/' + seasonId + this.key,
        method: "GET"
      });

    };
    /**
     * @description Retrieve full meta information
     * @param serialId
     * @param seasonId
     * @returns {*}
     */
    getSerialFullInfo(serialId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + this.key,
        method: "GET"
      });

    };

   
}
FilmListService.$import = ['$http', 'api'];
/* harmony default export */ __webpack_exports__["a"] = (FilmListService);

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FilmListService__ = __webpack_require__(65);


let filmListService = angular.module('filmsApp.services',[]);

filmListService.service('FilmListService', __WEBPACK_IMPORTED_MODULE_0__FilmListService__["a" /* default */]);
filmListService = filmListService.name
/* harmony default export */ __webpack_exports__["a"] = (filmListService);

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[100]);