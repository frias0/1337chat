var adminModule = angular.module('adminModule', []);

adminModule.controller('AdminController', ['$scope', '$http',
  function($scope, $http){
  $http.get('/user').success(function(data){
    console.log("hejsahkjsd", data[0]);
    $scope.users = data;
  });
  $scope.orderProp = 'username'
}]);
