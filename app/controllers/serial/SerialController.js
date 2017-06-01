// (function (filmApp) {
//   var SerialCtrl = ['$scope', '$stateParams' ,'FilmsListService', function ($scope, $stateParams, FilmsListService) {
//     function init() {
//       $scope.stateParams = $stateParams;
//       loadSerialData();
//     }
//     $scope.getSelectedEpisode = function(episodeData) {
//       if(episodeData.episode_number == $scope.stateParams.eid) {
//         return 'selected';
//       }
//     }
//     $scope.getSelectedSeason = function(seasonData) {
//       if(seasonData.season_number == $scope.stateParams.sid) {
//         return 'selected';
//       }
//     }
//     function loadSerialData() {
//       $scope.loading = true;
//       FilmsListService.getSerialFullInfo($stateParams.id).then(function (fullData) {
//         $scope.serialFullData = fullData.data;
//         FilmsListService.getSeasonData($stateParams.id, $stateParams.sid, $stateParams.eid).then(function (seasonData) {
//           $scope.seasonData = seasonData.data;
//           FilmsListService.getSerialData($stateParams.id, $stateParams.sid, $stateParams.eid).then(function (data) {
//             $scope.loading = false;
//             $scope.episodeData = data.data;
//           });
//         });

//       });
//     }

//     init();
//   }];

//   filmApp.controller('SerialCtrl', SerialCtrl);

// })(filmApp);
SerialController.$inject = ['$scope','$stateParams','FilmsListService'];
export default class SerialController {
  constructor($scope, $stateParams, FilmsListService) {
    this.$scope = $scope;
    this.$stateParams = $stateParams;
    this.FilmsListService = FilmsListService;
    this.init();
  }
  init(){
    this.$scope.stateParams = $stateParams;
    this.loadSerialData();
  }
  loadSerialData() {
      this.$scope.loading = true;
      this.FilmsListService.getSerialFullInfo(this.$stateParams.id).then(function (fullData) {
        this.$scope.serialFullData = fullData.data;
        this.FilmsListService.getSeasonData(this.$stateParams.id, this.$stateParams.sid, this.$stateParams.eid).then(function (seasonData) {
          this.$scope.seasonData = seasonData.data;
          this.FilmsListService.getSerialData(this.$stateParams.id, this.$stateParams.sid, this.$stateParams.eid).then(function (data) {
            this.$scope.loading = false;
            this.$scope.episodeData = data.data;
          });
        });

      });
    }
}