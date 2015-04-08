var socketApp = angular.module('socketApp',['navbar-directive']);

socketApp
.directive('schrollBottom', function () {
  return {
    scope: {
      schrollBottom: "="
    },
    link: function (scope, element) {
      scope.$watchCollection('schrollBottom', function (newValue) {
        if (newValue)
        {
          $(element).scrollTop($(element)[0].scrollHeight);
        }
      });
    }
  }
})
.controller('ChatController',['$http','$log','$scope',function($http,$log,$scope){
	$scope.predicate = '-id';
	$scope.reverse = true;
	$scope.baseUrl = 'http://localhost:1337';
	$scope.chatList =[];
	$scope.getAllchat = function(){

		io.socket.get('/chat/addconv');

		$http.get($scope.baseUrl+'/chat')
			 .success(function(success_data){

			 		$scope.chatList = success_data;
			 		$log.info(success_data);
			 });
	};

	$scope.getAllchat();
	//$scope.chatUser = "Anonymous"
  //get username from a hidden <p> tag in chat.ejs
  $scope.chatUser = $('#hiddenName').text();
	$scope.chatMessage="";

	io.socket.on('chat',function(obj){

		if(obj.verb === 'created'){
			$log.info(obj)
			$scope.chatList.push(obj.data);
			$scope.$digest();
		}

	});

	$scope.sendMsg = function(){
		$log.info($scope.chatMessage);
		io.socket.post('/chat/addconv/',{user:$scope.chatUser,message: $scope.chatMessage});
		$scope.chatMessage = "";
	};
}]);
