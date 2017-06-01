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
// FilmListService.$import = ['$http', 'api'];
export default FilmListService;