(function() {
  var app = angular.module('profile-directive', []);
  app.directive('profile', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/profile/profileTemplate.html',
      link: function(scope, elem, attrs) {
        scope.username = attrs.username;
        scope.description = attrs.description;
        scope.groups = angular.fromJson(attrs.groups);
      },
      controller: ['$scope', '$log', function ($scope, $log) {
        
      }],
      controllerAs: 'profileCtrl'
    };
  });
})();
