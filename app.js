(function () {
  'use strict';
  angular.module('RouterApplication', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
      console.log('routing');
      $stateProvider.state('home', {
        url: '/',
        templateUrl: 'home/home.tpl.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      }).state('other',{
        url: '/other',
        templateUrl: 'other/other.tpl.html'
      }).state('other.resolved',{
        url: '/resolved/:since',
        templateUrl: 'other/child.tpl.html',
        controller: 'resolvedCtrl',
        controllerAs: 'vm',
        resolve: {
          since: function($stateParams){
            return $stateParams.since;
          },
          users: function(githubDataService, since){
            return githubDataService.getUsers(since);
          }
        }
      }).state('other.activated',{
        url: '/activated',
        templateUrl: 'other/child.tpl.html',
        controller: 'activatedCtrl',
        controllerAs: 'vm'
      });

      $urlRouterProvider.otherwise('/');
    });

})();