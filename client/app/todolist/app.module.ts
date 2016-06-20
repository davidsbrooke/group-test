namespace app {
  angular.module('app').config ((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('todolist', {
      url: '/todo',
      templateUrl: '/client/app/todolist/app.html',
      controller: 'AppController as vm'
    });
  });
}
