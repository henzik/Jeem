angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope, $state, $stateParams) {
  $scope.startWorkout = function() {
      $scope.go('start');
    }
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('StartCtrl', function($scope, $ionicHistory, $element) {
  $scope.back = function() {
      $ionicHistory.goBack();
    }

  $scope.setEnergy = function(num) {
    $scope.selectedEnergy = num;
  }

  $scope.shouldCheck = function(num) {
    if($scope.selectedEnergy == num) {
      return true
    } else {
      return false
    }
  }
})


.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
