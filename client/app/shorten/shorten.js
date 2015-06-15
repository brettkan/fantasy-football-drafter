angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  // Your code here
  $scope.link = $scope.link || {data: null};

  $scope.addLink = function(url){
    Links.shortenUrl(url).then(function(data) {
      $scope.link.data = data;
    });
  };

});
