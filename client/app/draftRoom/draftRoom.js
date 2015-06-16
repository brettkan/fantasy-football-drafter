angular.module('FFDrafter.draftRoom', [])

.controller('DraftRoomController', function ($scope, $location, Players) {
  
  $scope.availablePlayers = {};

  $scope.draftedPlayers = [];

  $scope.tracker = {
    playerPick: 1,
    round: 1,
    numberOfPlayers: 12,
    numberOfRounds: 15
  };

  $scope.addAllPlayers = function(playerObj){
    Players.getPlayerList().then(function(data) {
      playerObj.players = data;
    });
  };

  $scope.draftPlayer = function(availablePlayersIndex) {
    console.log('Player drafted');

    $scope.addToDrafted(availablePlayersIndex);
    $scope.removeFromAvailable(availablePlayersIndex);
    $scope.incrementPick();
  };

  $scope.addToDrafted = function(index) {
    var current = $scope.availablePlayers.players[index];
    var currentRound = $scope.tracker.round - 1;
    var currentPlayer = $scope.tracker.playerPick - 1;

    if (!$scope.draftedPlayers[currentRound]) {
      // For some reason Angular needs at least an empty object or ng-repeat does not work
      $scope.draftedPlayers[currentRound] = [{},{},{},{},{},{},{},{},{},{},{},{}];
    }

    $scope.draftedPlayers[currentRound][currentPlayer] = current;
  };

  $scope.removeFromAvailable = function(index) {
    $scope.availablePlayers.players.splice(index, 1);
  };

  $scope.incrementPick = function() {
    // In odd rounds, player pick should go up in a snake draft
    if ($scope.tracker.round % 2 === 1) {
      $scope.tracker.playerPick++;

      // If last player has picked, increment round, last player picks again
      if ($scope.tracker.playerPick > $scope.tracker.numberOfPlayers) {
        $scope.tracker.round++;
        $scope.tracker.playerPick--;
      }
    } else { // In even rounds, player pick should go back down in a snake draft
      $scope.tracker.playerPick--;

      // If first player has picked, increment round, first player picks again
      if ($scope.tracker.playerPick < 1) {
        $scope.tracker.round++;
        $scope.tracker.playerPick++;
      }
    }
  };
  







  $scope.addAllPlayers($scope.availablePlayers);

});
