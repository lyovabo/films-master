
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
    this.$scope.orderByName = (objects,obj2) => {
      // console.log('making reverse',this.$scope.reverse);
      // this.$scope.reverse = (this.$scope.reverse)?false:true;
      console.log(objects);
      return objects;
    }
  }
  loadSeriesList(){
    var self = this;
    self.$scope.loading = true;
    self.FilmsListService.getSerialList(this.$scope.page).then( (data) => {
      this.$scope.loading = false;
      this.$scope.serialsList = data.data;
      console.log(data.data)
    });
  }
  makeReverse() {
    console.log(this)
    
  }
}
MainController.$inject = ['$scope','FilmListService'];
