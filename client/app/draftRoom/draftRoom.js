angular.module('FFDrafter.draftRoom', [])

.controller('DraftRoomController', function ($scope, $location, Players) {
  // Your code here
  // $scope.link = $scope.link || {data: null};

  // $scope.addLink = function(url){
  //   Links.shortenUrl(url).then(function(data) {
  //     $scope.link.data = data;
  //   });
  // };

  $scope.data = {};

  $scope.addAllPlayers = function(playerObj){
    Players.getPlayerList().then(function(data) {
      playerObj.players = data;
    });
  };

  $scope.addAllPlayers($scope.data);

});
