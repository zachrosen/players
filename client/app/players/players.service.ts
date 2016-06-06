namespace app {

  interface IPlayerResourceClass extends IPlayer, ng.resource.IResource<IPlayerResourceClass>{}
  interface IPlayerResource extends ng.resource.IResourceClass<IPlayerResourceClass>{
    update(params: Object);
    update(params: Object, body: Object);
  }

  export class PlayerService {

    private PlayerResource: IPlayerResource;

    public getAll() {
      return this.PlayerResource.query();
    }
    public getOne(id: number) {
      return this.PlayerResource.get({id: id});
    }

    public remove(id: number) {
      return this.PlayerResource.remove({id: id}).$promise;
    }
    public create(player: IPlayer) {
      return this.PlayerResource.save(player).$promise;
    }
    public update(player: IPlayer) {
      return this.PlayerResource.update({id: player.id}, player).$promise;
    }

    constructor (
      private $resource: ng.resource.IResourceService
    ) {
      this.PlayerResource = <IPlayerResource>$resource('/api/v1/players/:id', null, {'update': {'method': 'PUT'}})
    }
  }
  angular.module('app').service('PlayerService', PlayerService);
}
