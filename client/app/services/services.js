angular.module('FFDrafter.services', [])

.factory('Players', function($http) {
  var getPlayerList = function() {
    return $http({
      method: 'GET',
      url: '/getPlayers'
    })
    .then(function(resp) {
      console.log(resp.data.DraftRankings);
      return resp.data.DraftRankings;  // resp.data: {PPR: 1, DraftRankings: [...] }
    });
  };

  return {
    getPlayerList: getPlayerList
  };

});

// .factory('Links', function ($http) {
//   var getLinks = function() {
//     return $http({
//       method: 'GET',
//       url: '/api/links'
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   var shortenUrl = function(url) {
//     return $http({
//       method: 'POST',
//       url: '/api/links',
//       data: { url: url }
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   var redirectUrl = function(code) {
//     return $http({
//       method: 'GET',
//       url: '/api/links/' + code,
//     })
//     .then(function (resp) {
//       return resp.data;
//     });
//   };

//   return {
//     getLinks: getLinks,
//     shortenUrl: shortenUrl,
//     redirectUrl: redirectUrl
//   };
// })


// .factory('Auth', function ($http, $location, $window) {
//   // Don't touch this Auth service!!!
//   // it is responsible for authenticating our user
//   // by exchanging the user's username and password
//   // for a JWT from the server
//   // that JWT is then stored in localStorage as 'com.shortly'
//   // after you signin/signup open devtools, click resources,
//   // then localStorage and you'll see your token from the server
//   var signin = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signin',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var signup = function (user) {
//     return $http({
//       method: 'POST',
//       url: '/api/users/signup',
//       data: user
//     })
//     .then(function (resp) {
//       return resp.data.token;
//     });
//   };

//   var isAuth = function () {
//     return !!$window.localStorage.getItem('com.shortly');
//   };

//   var signout = function () {
//     $window.localStorage.removeItem('com.shortly');
//     $location.path('/signin');
//   };


//   return {
//     signin: signin,
//     signup: signup,
//     isAuth: isAuth,
//     signout: signout
//   };
// });
