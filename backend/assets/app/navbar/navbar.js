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
        scope.friends = [];
      },
      controller: ['$scope', '$log', '$http', function ($scope, $log, $http) {
        $scope.toggleSidebar = function() {
          $("#wrapper").toggleClass("toggled");
        };

        $scope.getFriends = function() {
          $log.info("getting http user/, change to user/id");
          $http.get('/user').success(function(data) {
            $log.info("Data[0].friends: ");
            $log.info(data[0].friends);
            $scope.friends = data[0].friends;
            for(var i=0; i<$scope.friends.length; i++) {
              $log.info($scope.friends[i]);
            }
          });
        };

        $scope.getFriends();
      }],
      controllerAs: 'navbarCtrl'
    };
  });
})();
