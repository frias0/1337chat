var leetchatApp = angular.module('leetchatApp', [
  'ngRoute',
  'AuthController'
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'admin/admin.ejs',
        controller: 'AdminListController'
      }).
      when('/admin/show', {
        templateUrl: 'partials/admin/adminShow.ejs',
        controller: 'AdminShowController'
      }).
      when('/profile', {
        templateUrl: 'profle/profileTemplate.html',
        controller: 'profileController'
      }).
      when('/chat', {
        templateUrl: 'chat/chat.ejs',
        controller: 'ChatController'
      }).
      when('/', {
        templateUrl: 'auth/login.ejs',
        controller: 'AuthController'
      });
  }]);
