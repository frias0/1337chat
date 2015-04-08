var profileModule = angular.module('profileModule', []);

profileModule.controller('ProfileController', ['$scope', '$http', '$log', function($scope, $http, $log) {
  $scope.username = 'The Username';
  $scope.description = 'Some description';
  $scope.groups = [];

  $scope.getGroups = function(){
    $http.get('/user/groups').success(function(data){
      console.log("fetched groups", data[0]);
      $scope.groups = data;
    });
  };
  $scope.getFriends = function(){
    $http.get('/user/friends').success(function(data){
      console.log("fetched friends", data[0]);
      $scope.friends = data;
    });
  };
  $scope.createGroup = function(){
    $http.post('/group/create').success(function(data){
      console.log("group created", data[0]);
      //$scope.friends = data;
      $scope.getGroups();
    }).error(function(data){
      console.log("error creating group", data);
    });
  };
}]);

/*(function() {
  var profileModule = angular.module('profileModule', []);
  profileModule.directive('profile', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/profile/profileTemplate.html',
      link: function(scope, elem, attrs) {
        scope.username = attrs.username;
        scope.description = attrs.description;
        scope.groups = angular.fromJson(attrs.groups);
      },
      controller: ['$scope', '$log', '$http', function ($scope, $log, $http) {
        $scope.getGroups = function(){
          $http.get('/user/groups').success(function(data){
            console.log("fetched groups", data[0]);
            $scope.groups = data;
          });
        };
        $scope.getFriends = function(){
          $http.get('/user/friends').success(function(data){
            console.log("fetched friends", data[0]);
            $scope.friends = data;
          });
        };
        $scope.createGroup = function(){
          $http.post('/group/create').success(function(data){
            console.log("group created", data[0]);
            //$scope.friends = data;
            $scope.getGroups();
          }).error(function(data){
            console.log("error creating group", data);
          });
        };
      }],
      controllerAs: 'profileCtrl'
    };
  });
})();*/
