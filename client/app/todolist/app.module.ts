namespace app {
  angular.module('app').config ((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('home page', {
      url: '/',
      templateUrl: '/client/app/todolist/app.html',
      controller: 'AppController as vm'
    });
  });
}
