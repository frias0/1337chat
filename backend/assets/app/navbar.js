(function() {
  var app = angular.module('navbar-directive', []);
  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/navbarTemplate.html',
      link: function(scope, elem, attrs) {
        console.log(elem);
        scope.pagename = attrs.title;
      },
      controller: ['$scope', '$log', function ($scope, $log) {
        $scope.toggleSidebar = function() {
          $log.info("toggle");
          $("#wrapper").toggleClass("toggled");
        };
      }],
      controllerAs: 'navbarCtrl'
    };
  });
})();
