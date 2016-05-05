'use strict';

angular.module('angular-meteor-boilerplate').config(function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
        .state('main', {
            url: '/',
            template: '<main></main>'
        });

  $urlRouterProvider.otherwise('/');

});

angular.module('angular-meteor-boilerplate').config(['$angularMeteorSettings', function($angularMeteorSettings) {
  $angularMeteorSettings.suppressWarnings = true; // Disables write of warnings to console
}]);
