var express = require('express');
// var util = require('./lib/utility');
// var partials = require('express-partials');
// var bodyParser = require('body-parser');
var request = require('request');
var session = require('express-session');

var db = require('./app/config');
var Users = require('./app/collections/users');
var User = require('./app/models/user');
var Players = require('./app/collections/players');
var Player = require('./app/models/player');
var env = require('./env/config');

var app = express();



// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');
// app.use(partials());
// // Parse JSON (uniform resource locators)
// app.use(bodyParser.json());
// // Parse forms (signup/login)
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/client'));

// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: true }
// }));



app.get('/getPlayers', function(req, res) {
  request('http://www.fantasyfootballnerd.com/service/draft-rankings/json/test/1/', function(err, APIResp, body) {
    if (err) { 
      console.log('Error with API request: ', err); 
      res.send(400);
    } else {
      res.status(200).send(body);
    }
  });
});

// app.get('/',
// function(req, res) {
//   res.render('index');
// });

// app.get('/create', 
// function(req, res) {
//   res.render('index');
// });

// app.get('/signup', 
// function(req, res) {
//   res.render('signup');
// });

// app.post('/signup', 
// function(req, res) {
//   var username = req.body.username;
//   var password = req.body.password;

//   var newUser = new User({
//     username: username,
//     password: password
//   });

//   newUser.fetch().then(function(user) {
//     if (user) {
//       console.log('User already exists, please choose another name.');
//     } else {
//       newUser.save().then(function(user) {
//         Users.add(user);
//         util.createSession(req, res, user);
//       });
//     }
//   });
// });

// app.get('/signin', 
// function(req, res) {
//   res.render('login');
// });

// app.get('/links', 
// function(req, res) {
//   Links.reset().fetch().then(function(links) {
//     res.send(200, links.models);
//   });
// });

// app.post('/links', 
// function(req, res) {
//   var uri = req.body.url;

//   if (!util.isValidUrl(uri)) {
//     console.log('Not a valid url: ', uri);
//     return res.send(404);
//   }

//   new Link({ url: uri }).fetch().then(function(found) {
//     if (found) {
//       res.send(200, found.attributes);
//     } else {
//       util.getUrlTitle(uri, function(err, title) {
//         if (err) {
//           console.log('Error reading URL heading: ', err);
//           return res.send(404);
//         }

//         var link = new Link({
//           url: uri,
//           title: title,
//           base_url: req.headers.origin
//         });

//         link.save().then(function(newLink) {
//           Links.add(newLink);
//           res.send(200, newLink);
//         });
//       });
//     }
//   });
// });

// app.get('/*', function(req, res) {
//   new Link({ code: req.params[0] }).fetch().then(function(link) {
//     if (!link) {
//       res.redirect('/');
//     } else {
//       var click = new Click({
//         link_id: link.get('id')
//       });

//       click.save().then(function() {
//         db.knex('urls')
//           .where('code', '=', link.get('code'))
//           .update({
//             visits: link.get('visits') + 1,
//           }).then(function() {
//             return res.redirect(link.get('url'));
//           });
//       });
//     }
//   });
// });

console.log('FFDrafter is listening on 8080');
app.listen(8080);
