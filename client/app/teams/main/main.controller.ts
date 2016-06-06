namespace app {
  export class TeamMainController {
    public teams: ITeam[];
    public remove(p: ITeam) {
      this.TeamService.remove(p.id).then(() => {
      this.teams.splice(this.teams.indexOf(p), 1)
      }, () => {
        console.error('ERROR!!!')
      });
    }

    constructor (
      private TeamService: app.TeamService
    ) {
      this.teams = TeamService.getAll();
          }
  }

  angular.module('app').controller('TeamMainController', TeamMainController);
}
