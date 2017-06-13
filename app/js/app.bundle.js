webpackJsonp([0],{

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(58);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_FilmListService_module__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__controllers_main_MainController_module__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__controllers_serial_SerialController_module__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__controllers_main_SomeFilter__ = __webpack_require__(65);


__webpack_require__(102);
/**
 * @ngdoc overview
 * @name filmsApp
 * @description
 * # filmsApp
 *
 * Main module of the application.
 */





const filmsApp = __WEBPACK_IMPORTED_MODULE_0_angular___default.a.module('filmsApp', [
    'ngCookies',
    'ngSanitize',
    'ngRoute',
    'ui.router',
    __WEBPACK_IMPORTED_MODULE_1__services_FilmListService_module__["a" /* default */],
    __WEBPACK_IMPORTED_MODULE_2__controllers_main_MainController_module__["a" /* default */]
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

// filmsApp.controller('SerialController',SerialController);
// filmsApp.controller('MainController',MainController);
filmsApp.filter('Some',() => __WEBPACK_IMPORTED_MODULE_4__controllers_main_SomeFilter__["a" /* default */]);

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

class MainController {
  constructor($scope,FilmsListService) {
    this.$scope = $scope;
    this.FilmsListService = FilmsListService;

    this.$scope.reverse = false;
    this.init();
  }
  init() {
    this.$scope.page = 1;
    this.loadSeriesList()
    this.$scope.serialsList = [];
    this.$scope.LoadMore = () => {
      this.$scope.page++;
      this.loadSeriesList();
    }
  }
  loadSeriesList(){
    var self = this;
    self.$scope.loading = true;
    self.FilmsListService.getSerialList(this.$scope.page).then( (data) => {
      this.$scope.loading = false;

      this.$scope.serialsList = this.$scope.serialsList.concat(data.data.results);
      console.log(this.$scope.serialsList);
    });
  }
  makeReverse() {
    console.log(this)
    
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainController;

MainController.$inject = ['$scope','FilmListService'];


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MainController__ = __webpack_require__(63);
// import MainController from './MainController';
// import SerialController from '../serial/SerialController';
// let controllers = angular.module('filmsApp.controllers',[]);
// controllers.controller('MainController',MainController);
// controllers.controller('SerialController',SerialController);
// controllers = controllers.name;
// export default controllers;

let mainControllerModule = angular.module('filmsApp.controllers',[]);
mainControllerModule.controller('MainController',__WEBPACK_IMPORTED_MODULE_0__MainController__["a" /* default */]);
/* harmony default export */ __webpack_exports__["a"] = (mainControllerModule.name);

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Some {
	static logInput(input){
		console.log(input)
		input.sort(function(a, b){
    	if(a.name < b.name) return -1;
    	if(a.name > b.name) return 1;
    	return 0;
		})
		return input;
	}

}
/* harmony default export */ __webpack_exports__["a"] = (Some.logInput);

// export default class Some {
// 	constructor(item){
// 		this.item = item;
// 	}
// }

/***/ }),

/***/ 66:
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

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SerialController__ = __webpack_require__(66);

let serialController = angular.module('filmsApp.controllers');
serialController.controller('SerialController',__WEBPACK_IMPORTED_MODULE_0__SerialController__["a" /* default */]);
/* unused harmony default export */ var _unused_webpack_default_export = (serialController = serialController.name);

/***/ }),

/***/ 68:
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FilmListService__ = __webpack_require__(68);


let filmListService = angular.module('filmsApp.services',[]);

filmListService.service('FilmListService', __WEBPACK_IMPORTED_MODULE_0__FilmListService__["a" /* default */]);
filmListService = filmListService.name
/* harmony default export */ __webpack_exports__["a"] = (filmListService);

/***/ })

},[103]);