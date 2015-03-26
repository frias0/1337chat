(function() {
  var app = angular.module('navbar-directive', []);
  app.directive('navbar', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/navbarTemplate.html',
      link: function(scope, elem, attrs) {
        console.log(attrs.title);
        scope.pagename = attrs.title;
      },
      controller: ['$scope', function ($scope) {
        /*$scope.pagename = "Some Page";

        this.setName = function() {
          console.log("HI!");
          $scope.pagename = "Something";
        };*/
      }],
      controllerAs: 'navbarCtrl'
    };
  });
})();
