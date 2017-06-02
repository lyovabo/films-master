export default class SerialController {
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
SerialController.$inject = ['$scope', '$stateParams', 'FilmListService'];
