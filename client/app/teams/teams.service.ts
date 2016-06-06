namespace app {

  interface ITeamResourceClass extends ITeam, ng.resource.IResource<ITeamResourceClass>{}
  interface ITeamResource extends ng.resource.IResourceClass<ITeamResourceClass>{}

  export class TeamService {

    private TeamResource: ITeamResource;

    public getAll() {
      return this.TeamResource.query();
    }
    public getOne(id: number) {
      return this.TeamResource.get({id: id});
    }

    public remove(id: number) {
      return this.TeamResource.remove({id: id}).$promise;
    }

    constructor (
      $resource: ng.resource.IResourceService
    ) {
      this.TeamResource = <ITeamResource>$resource('/api/v1/teams/:id')
    }
  }
  angular.module('app').service('TeamService', TeamService);
}
