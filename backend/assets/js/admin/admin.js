var adminModule = angular.module('adminModule', []);

adminModule.controller('AdminListController', ['$scope', '$http',
  function($scope, $http){
  $http.get('/user').success(function(data){
    console.log("list users", data);
    $scope.users = data;
  });
  $scope.orderProp = 'username'
}]);

adminModule.controller('AdminShowController', ['$scope', '$http','$routeParams',
  function($scope, $http){
    $scope.showUser = function(user){
      $http.get('/user/'+user.id).success(function(data){
        console.log("show user", data);
      });
    };
}]);

adminModule.controller('AdminEditController', ['$scope', '$http','$routeParams',
  function($scope, $http){
    $scope.editUser = function(user){
      $http.get('/user/'+user.id).success(function(data){
        console.log("edit user", data);
      });
    };
}]);

adminModule.controller('AdminNewController', ['$scope', '$http','$routeParams',
  function($scope, $http){
    $scope.editUser = function(user){
      $http.get('/user/'+user.id).success(function(data){
        console.log("New user", data);
      });
    };
}]);
