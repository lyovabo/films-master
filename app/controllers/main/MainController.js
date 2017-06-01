// (function (filmApp) {
//   var MainCtrl = ['$scope', 'FilmsListService', function ($scope, FilmsListService) {
//     function init() {
//       $scope.page = 1;
//       loadSeriesList()
//     }

//     function loadSeriesList() {
//       $scope.loading = true;


//       FilmsListService.getSerialList($scope.page).then(function (data) {
//         $scope.loading = false;
//         $scope.serialsList = data.data;
//       });
//     }

//     init();
//   }];

//   filmApp.controller('MainCtrl', MainCtrl);

// })(filmApp);
MainController.$inject = ['$scope','FilmsListService'];
export default class MainController {
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
    this.$scope.loading = true;
    this.FilmsListService.getSerialList($scope.page).then(function (data) {
      $scope.loading = false;
      $scope.serialsList = data.data;
    });
  }
}