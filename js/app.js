App = Ember.Application.create({LOG_TRANSITIONS: true});

App.ApplicationSerializer = DS.LSSerializer.extend();
App.ApplicationAdapter = DS.FixtureAdapter.extend({
  namespace: 'statskeeper'
});

App.Router.map(function() {
  this.resource('teams', { path: '/'}, function(){
    this.resource('team', { path: '/:team_id' }, function() {
      this.resource('player', { path: '/:player_id'}, function(){
        this.resource('shot');
      })
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
