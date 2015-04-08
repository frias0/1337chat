(function() {
  var app = angular.module('navbar-directive', []);
  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/navbar/navbarTemplate.html',
      link: function(scope, elem, attrs) {
        console.log(elem);
        scope.pagename = attrs.title;
        scope.context = attrs.context;
      },
      controller: ['$scope', '$log', function ($scope, $log) {
        $scope.toggleSidebar = function() {
          $("#wrapper").toggleClass("toggled");
        };
      }],
      controllerAs: 'navbarCtrl'
    };
  });
})();
