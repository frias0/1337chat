var leetchatApp = angular.module('leetchatApp', [
  'ngRoute',
  'leetchatApp.admin',
  'leetchatApp.profile',
  'leetchatApp.navbar',
  'leetchatApp.chat'
])


var adminModule = angular.module('leetchatApp.admin', [])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/admin', {
        templateUrl: 'partials/admin/admin.ejs',
        controller: 'AdminListController'
      }).
      when('/admin/show/:id', {
        templateUrl: 'partials/admin/adminShow.ejs',
        controller: 'AdminShowController'
      }).
      when('/profile', {
        templateUrl: 'profle/profileTemplate.html',
        controller: 'profileCtrl'
      }).
      when('/chat', {
        templateUrl: 'chat/chat.ejs',
        controller: 'ChatController'
      });
  }]);
