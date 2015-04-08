var leetchatApp = angular.module('leetchatApp', [
  'ngRoute',
  'authModule',
  'profileModule',
  'chatModule',
  'adminModule'
])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'js/admin/admin.ejs',
        controller: 'AdminListController'
      }).
      when('/admin/show', {
        templateUrl: 'js/admin/adminShow.ejs',
        controller: 'AdminShowController'
      }).
      when('/profile', {
        templateUrl: 'js/profle/profileTemplate.html',
        controller: 'profileController'
      }).
      when('/chat', {
        templateUrl: 'js/chat/chat.ejs',
        controller: 'ChatController'
      }).
      when('/', {
        templateUrl: 'js/auth/login.ejs',
        controller: 'AuthController'
      });
  }]);
