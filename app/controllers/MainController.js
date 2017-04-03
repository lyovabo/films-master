(function (filmApp) {
  var MainCtrl = ['$scope', 'FilmsListService', function ($scope, FilmsListService) {
    function init() {
      $scope.page = 1;
      loadSeriesList()
    }

    function loadSeriesList() {
      $scope.loading = true;


      FilmsListService.getSerialList($scope.page).then(function (data) {
        $scope.loading = false;
        $scope.serialsList = data.data;
      });
    }

    init();
  }];

  filmApp.controller('MainCtrl', MainCtrl);

})(filmApp);
