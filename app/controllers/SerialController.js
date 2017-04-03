(function (filmApp) {
  var SerialCtrl = ['$scope', '$stateParams' ,'FilmsListService', function ($scope, $stateParams, FilmsListService) {
    function init() {
      $scope.stateParams = $stateParams;
      loadSerialData();
    }
    $scope.getSelectedEpisode = function(episodeData) {
      if(episodeData.episode_number == $scope.stateParams.eid) {
        return 'selected';
      }
    }
    $scope.getSelectedSeason = function(seasonData) {
      if(seasonData.season_number == $scope.stateParams.sid) {
        return 'selected';
      }
    }
    function loadSerialData() {
      $scope.loading = true;
      FilmsListService.getSerialFullInfo($stateParams.id).then(function (fullData) {
        $scope.serialFullData = fullData.data;
        FilmsListService.getSeasonData($stateParams.id, $stateParams.sid, $stateParams.eid).then(function (seasonData) {
          $scope.seasonData = seasonData.data;
          FilmsListService.getSerialData($stateParams.id, $stateParams.sid, $stateParams.eid).then(function (data) {
            $scope.loading = false;
            $scope.episodeData = data.data;
          });
        });

      });
    }

    init();
  }];

  filmApp.controller('SerialCtrl', SerialCtrl);

})(filmApp);
