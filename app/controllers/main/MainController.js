
export default class MainController {
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
MainController.$inject = ['$scope','FilmListService'];
