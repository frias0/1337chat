(function() {
  var app = angular.module('chat-directive', []);
  app.directive('chat', function() {
    return {
      restrict: 'E',
      templateUrl: '/app/chat/chatTemplate.html',
      link: function(scope, elem, attrs) {
        scope.groupID = attrs.group;  //TEMP
        scope.messages = [];
        scope.user = attrs.user;      //TEMP
        console.log("Chat loaded. group: " + scope.groupID + " user: " + scope.user);
      },
      controller: ['$scope', '$log', '$http', function ($scope, $log, $http) {
        /* Get all messages in this chat */
        $scope.getAllMessages = function() {
          $http.get('/activity', {group:$scope.groupID}).success(function(response) {
            $log.info("GET all Messages:" + $scope.groupID);
            $log.info(response);
            /* There's probably a better way to do this part. Handle in template instead? */
            for(var i=0; i<response.length; i++) {
              $scope.messages[i] = {user:response[i].user.username, content:response[i].content};
            }
          }).error(function(edata) {
            $log.error("ERROR loading messages: " + edata);
          });
        };

        /* POST a new message to the server. Using socket.io because why not? */
        $scope.sendMessage = function() {
          $log.info("Sending message: " + $scope.newMessage);
          io.socket.post('/activity', {content:$scope.newMessage, group:$scope.groupID, user:$scope.user});
          $scope.newMessage = "";
        };

        /* Initialize by fetching all messages */
        $scope.getAllMessages();
      }],
      controllerAs: 'chatCtrl'
    };
  });
  /* Scroll to the bottom of the chat when a new message arrives. INCLUDE JQuery */
  app.directive('schroll_bottom', function() {
    return {
      scope: {
        schrollBottom: "="
      },
      link: function (scope, element) {
        scope.$watchCollection('schrollBottom', function (newValue) {
          if (newValue) {
            $(element).scrollTop($(element)[0].scrollHeight);
          }
        });
      }
    };
  });
})();
