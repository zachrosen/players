namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('players main', {
      url: '/players',
      templateUrl:'/client/app/players/main/main.jade',
      controller: 'PlayerMainController as vm'
    }).state('player details', {
      url: '/details/:id',
      templateUrl: '/client/app/players/details/details.jade',
      controller: 'PlayerDetailsController as vm'
    }).state('player create', {
      url: '/create',
      templateUrl: '/client/app/players/create/create.jade',
      controller: 'PlayerCreateController as vm'
    });
  });
}
