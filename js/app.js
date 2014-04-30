App = Ember.Application.create({LOG_TRANSITIONS: true});

App.ApplicationAdapter = DS.FixtureAdapter.extend();

App.Router.map(function() {
  this.resource('teams', { path: '/'}, function(){
    this.resource('team', { path: '/:team_id' }, function() {
      this.resource('player', { path: '/:player_id'})
    });
  });
});

App.TeamsRoute = Ember.Route.extend({
  model: function() {
    var teams = this.get('store').findAll('team');
    return teams;
  }
});

App.PlayerRoute = Ember.Route.extend({
  model: function(params) {
    var store = this.get('store');
    return store.find('player', params.player_id);
  }
});

// App.TeamRoute = Ember.Route.extend({
//   model: function(params) {
//     var store = this.get('store');
//     return store.find('team', params.team_id);
//   }
// });

// App.PlayersRoute = Ember.Route.extend({
//   model: function() {
//     var players = this.get('store').findAll('player');
//     return players;
//   }
// });

