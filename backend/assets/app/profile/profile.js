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
          $http.post('/groups/create').success(function(data){
            console.log("group created", data[0]);
            //$scope.friends = data;
          }).error(function(data){
            console.log(eror creating group, data);
          });
        };
      }],
      controllerAs: 'profileCtrl'
    };
  });
})();
