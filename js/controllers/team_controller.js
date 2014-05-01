App.TeamController = Ember.ObjectController.extend({
	first_p: function(){
	  var players = this.get('players');
	  var first = players.objectsAt([0, 1]);
	  return first;
	}.property('first_p.@each.name'),
  actions: {
    addPlayer: function() {
      var name = this.get('playerName');
      if (!name.trim()) { return; }
      var n_player = this.store.createRecord('player', {
        name: name
      });
      n_player.setProperties({ total_scored: 0});
      this.set('playerName', '');
      n_player.save;
      this.get('players').pushObject(n_player);
    }
  }
});
