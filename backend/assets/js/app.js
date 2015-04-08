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
        templateUrl: 'js/profile/profileTemplate.html',
        controller: 'ProfileController'
      }).
      when('/chat', {
        templateUrl: 'js/chat/chat.ejs',
        controller: 'ChatController'
      }).
      when('/', {
        //redirectTo: '/profile'  //Så kan man göra
        templateUrl: 'js/auth/login.ejs',
        controller: 'AuthController'
      });
  }]);
