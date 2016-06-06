namespace app {
  export class PlayerDetailsController {

    public player: IPlayer;
    public isEditing = false;
    public updatePlayer: IPlayer;


    public startEditing() {
      this.isEditing = true;
      this.updatePlayer = angular.copy(this.player);
    }

    public remove(){
      this.PlayerService.remove(this.player.id).then(() => {
      this.$state.go('players main')
      })
    }
    public update(){
      this.PlayerService.update(this.updatePlayer).then(() => {
        this.isEditing = false;
        this.player = angular.copy(this.updatePlayer);
      })
    }


    constructor(
      private PlayerService: app.PlayerService,
      private $stateParams: ng.ui.IStateParamsService,
      private $state: ng.ui.IStateService
    ) {
      this.player = this.PlayerService.getOne($stateParams['id'])
    }
  }
  angular.module('app').controller('PlayerDetailsController', PlayerDetailsController);
}
