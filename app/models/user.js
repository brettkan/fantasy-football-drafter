var db = require('../config');
var Player = require('./player.js');

var User = db.Model.extend({
  tableName: 'users',
  hasTimestamps: true,
  player: function() {
    return this.hasMany(Player);
  }
});

module.exports = User;
