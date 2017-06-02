
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
    var self = this;
    self.$scope.loading = true;
    self.FilmsListService.getSerialList(this.$scope.page).then(function (data) {
      self.$scope.loading = false;
      self.$scope.serialsList = data.data;
    });
  }
}
MainController.$inject = ['$scope','FilmListService'];
