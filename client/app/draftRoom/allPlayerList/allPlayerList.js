angular.module('FFDrafter.allPlayerList', [])

.controller('allPlayerListController', function ($scope, Players) {

  $scope.data = {};

  $scope.addPlayers = function(playerObj){
    Players.getPlayerList().then(function(data) {
      playerObj.players = data;
    });
  };

  $scope.addPlayers($scope.data);
});
