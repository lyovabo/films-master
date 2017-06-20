webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


var FilmListService = function () {
  function FilmListService($http, api) {
    _classCallCheck(this, FilmListService);

    this.$http = $http;
    this.api = api;
    this.key = '?api_key=e51bd1241b07fe860a6e3f9b9ae173cc';
    this.serialListUrl = '3/discover/tv' + this.key + '&sort_by=popularity.desc&with_genres=18';
  }

  _createClass(FilmListService, [{
    key: 'getSerialList',
    value: function getSerialList(page) {
      page = page || 1;
      return this.$http({
        url: this.api.url + this.serialListUrl + '&page=' + page,
        method: "GET"
      });
    }
  }, {
    key: 'getSerialData',


    /**
     * @description Retrieve exact data for concrete movie
     * @param serialId
     * @param seasonId
     * @param episodeId
     * @returns {*}
     */
    value: function getSerialData(serialId, seasonId, episodeId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + '/season/' + seasonId + '/episode/' + episodeId + this.key,
        method: "GET"
      });
    }
  }, {
    key: 'getSeasonData',


    /*
     * @description Retrieve season data for selected serial
     * @param serialId
     * @param seasonId
     * @returns {*}
     */
    value: function getSeasonData(serialId, seasonId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + '/season/' + seasonId + this.key,
        method: "GET"
      });
    }
  }, {
    key: 'getSerialFullInfo',

    /**
     * @description Retrieve full meta information
     * @param serialId
     * @param seasonId
     * @returns {*}
     */
    value: function getSerialFullInfo(serialId) {
      return this.$http({
        url: this.api.url + '3/tv/' + serialId + this.key,
        method: "GET"
      });
    }
  }]);

  return FilmListService;
}();

FilmListService.$import = ['$http', 'api'];
exports.default = FilmListService;

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _FilmListService = __webpack_require__(100);

var _FilmListService2 = _interopRequireDefault(_FilmListService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filmListService = angular.module('filmsApp.services', []);

filmListService.service('FilmListService', _FilmListService2.default);
filmListService = filmListService.name;
exports.default = filmListService;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(62);


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filmsApp = undefined;

var _angular = __webpack_require__(15);

var _angular2 = _interopRequireDefault(_angular);

var _FilmListService = __webpack_require__(101);

var _FilmListService2 = _interopRequireDefault(_FilmListService);

var _MainController = __webpack_require__(96);

var _MainController2 = _interopRequireDefault(_MainController);

var _SerialController = __webpack_require__(99);

var _SerialController2 = _interopRequireDefault(_SerialController);

var _SomeFilter = __webpack_require__(97);

var _SomeFilter2 = _interopRequireDefault(_SomeFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// require('./styles/styles.scss');
/**
 * @ngdoc overview
 * @name filmsApp
 * @description
 * # filmsApp
 *
 * Main module of the application.
 */
var filmsApp = exports.filmsApp = _angular2.default.module('filmsApp', ['ngCookies', 'ngSanitize', 'ngRoute', 'ui.router', _FilmListService2.default, _MainController2.default]).constant("api", {
  "url": "http://api.themoviedb.org/"
});

filmsApp.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function ($locationProvider, $stateProvider, $urlRouterProvider) {
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
  });
  $stateProvider.state('serial', {
    url: '/serial/{id}/season/{sid}/episode/{eid}',
    templateUrl: 'app/views/serial.html',
    controller: 'SerialController'
  });
}]);

// filmsApp.controller('SerialController',SerialController);
// filmsApp.controller('MainController',MainController);
filmsApp.filter('Some', function () {
  return _SomeFilter2.default;
});

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MainController = function () {
  function MainController($scope, FilmsListService) {
    _classCallCheck(this, MainController);

    this.$scope = $scope;
    this.FilmsListService = FilmsListService;

    this.$scope.reverse = false;
    this.init();
  }

  _createClass(MainController, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.$scope.page = 1;
      this.loadSeriesList();
      this.$scope.serialsList = [];
      this.$scope.LoadMore = function () {
        _this.$scope.page++;
        _this.loadSeriesList();
      };
    }
  }, {
    key: 'loadSeriesList',
    value: function loadSeriesList() {
      var _this2 = this;

      var self = this;
      self.$scope.loading = true;
      self.FilmsListService.getSerialList(this.$scope.page).then(function (data) {
        _this2.$scope.loading = false;

        _this2.$scope.serialsList = _this2.$scope.serialsList.concat(data.data.results);
        console.log(_this2.$scope.serialsList);
      });
    }
  }, {
    key: 'makeReverse',
    value: function makeReverse() {
      console.log(this);
    }
  }]);

  return MainController;
}();

exports.default = MainController;

MainController.$inject = ['$scope', 'FilmListService'];

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _MainController = __webpack_require__(95);

var _MainController2 = _interopRequireDefault(_MainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainControllerModule = angular.module('filmsApp.controllers', []); // import MainController from './MainController';
// import SerialController from '../serial/SerialController';
// let controllers = angular.module('filmsApp.controllers',[]);
// controllers.controller('MainController',MainController);
// controllers.controller('SerialController',SerialController);
// controllers = controllers.name;
// export default controllers;

mainControllerModule.controller('MainController', _MainController2.default);
exports.default = mainControllerModule.name;

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Some = function () {
	function Some() {
		_classCallCheck(this, Some);
	}

	_createClass(Some, null, [{
		key: "logInput",
		value: function logInput(input) {
			input.sort(function (a, b) {
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});
			console.log(input);
			return input;
		}
	}]);

	return Some;
}();

exports.default = Some.logInput;

// export default class Some {
// 	constructor(item){
// 		this.item = item;
// 	}
// }

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SerialController = function () {
    function SerialController($scope, $stateParams, FilmListService) {
        _classCallCheck(this, SerialController);

        this.$scope = $scope;
        this.$scope.stateParams = $stateParams;
        this.FilmListService = FilmListService;
        this.loadSerialData();
        this.init();
    }

    _createClass(SerialController, [{
        key: 'init',
        value: function init() {
            var _this = this;

            this.$scope.getSelectedEpisode = function (episodeData) {
                if (episodeData.episode_number == _this.$scope.stateParams.eid) {
                    return 'selected';
                }
            };
            this.$scope.getSelectedSeason = function (seasonData) {
                if (seasonData.season_number == _this.$scope.stateParams.sid) {
                    return 'selected';
                }
            };
        }
    }, {
        key: 'loadSerialData',
        value: function loadSerialData() {
            var _this2 = this;

            this.$scope.loading = true;
            var loading = function loading() {
                if (_this2.$scope.serialFullData && _this2.$scope.seasonData && _this2.$scope.episodeData) {
                    _this2.$scope.loading = false;
                }
            };
            this.FilmListService.getSerialFullInfo(this.$scope.stateParams.id).then(function (fullData) {

                _this2.$scope.serialFullData = fullData.data;
                loading();
            });
            this.FilmListService.getSeasonData(this.$scope.stateParams.id, this.$scope.stateParams.sid, this.$scope.stateParams.eid).then(function (seasonData) {
                _this2.$scope.seasonData = seasonData.data;
                loading();
            });
            this.FilmListService.getSerialData(this.$scope.stateParams.id, this.$scope.stateParams.sid, this.$scope.stateParams.eid).then(function (data) {
                _this2.$scope.episodeData = data.data;
                loading();
            });
        }
    }]);

    return SerialController;
}();

exports.default = SerialController;

SerialController.$inject = ['$scope', '$stateParams', 'FilmListService'];

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SerialController = __webpack_require__(98);

var _SerialController2 = _interopRequireDefault(_SerialController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var serialController = angular.module('filmsApp.controllers');
serialController.controller('SerialController', _SerialController2.default);
exports.default = serialController = serialController.name;

/***/ })

},[102]);