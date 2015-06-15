var db = require('../config');
var User = require('./user.js');

var Player = db.Model.extend({
  tableName: 'players',
  hasTimestamps: false,
  user: function() {
    return this.hasMany(User);
  }
});

module.exports = Click;
