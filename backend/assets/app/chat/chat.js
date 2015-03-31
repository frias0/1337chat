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

        /* WHen the Activity is updated, i.e a new message arrives */
        io.socket.on('activity', function(event) {
          if(event.verb == 'created') {
            $log.info("Notification. Event = user:"+event.data.user + ", content:"+event.data.content);
            $log.info(event.data);
            $scope.messages.push({user:event.data.user, content:event.data.content});
            $scope.$apply();
          }
        });

        /* Get all messages in this chat, and subscribe to the Activity model */
        $scope.getAllMessages = function() {
          io.socket.get('/activity', {group:$scope.groupID}, function(data, jwres) {
            /*$log.info("Subscribed. Response:");*/
            $log.info(data);
            for(var i=0; i<data.length; i++) {
                $scope.messages[i] = {user:data[i].user.username, content:data[i].content};
            }
            $scope.$apply();
          });
        };

        /* POST a new message to the server. Using socket.io because why not? */
        $scope.sendMessage = function() {
          $log.info("Sending message: " + $scope.newMessage);
          io.socket.post('/activity', {content:$scope.newMessage, group:$scope.groupID, user:$scope.user});
          $scope.messages.push({user:$scope.user, content:$scope.newMessage});
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
